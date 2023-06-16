import React, { useState, useEffect } from 'react';
import fetchData from './services/mockedFlightAPI';

import FlightSearch from './components/FlightSearch';
import FlightContext from './context/FlightsContext';
import FlightList from './components/FlightList';
import FetchError from './components/FetchError';
import AlertSuccess from './components/AlertSuccess';

import { TO, FROM } from './constants/common';
import { getFlightList } from './helpers/common';

const App = () => {
  const [data, setData] = useState([]);
  const [flightList, setFlightList] = useState([]);
  const [isSearchFlights, setIsSearchFlights] = useState(false);
  const [isBuy, setIsBuy] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const availableAirports = {
    departureList: getFlightList(data, { direction: FROM }),
    arrivalList: getFlightList(data, { direction: TO }),
  };

  useEffect(() => {
    const fetchFlightData = async () => {
      try {
        const fetchedData = await fetchData();

        setData(fetchedData);
      } catch (error) {
        setErrorMessage(error);
      }
    };

    fetchFlightData();
  }, []);

  const handleSetSearch = () => {
    setIsSearchFlights(false);
  };

  const handleAlertClick = () => {
    window.location.reload();
  };

  const setFlightsParams = (flights) => {
    const { departureAirport, arrivalAirport, departureDate } = flights;
    const list = data.filter((item) => {
      const isFreeSeats = item.seats.some((seat) => seat.available);

      return (
        item.from === departureAirport &&
        item.to === arrivalAirport &&
        item.departure.split('T')[0] === departureDate &&
        isFreeSeats
      );
    });
    setIsSearchFlights(true);
    setFlightList(list);
  };

  const setBuyTicket = (flightId, seatBought, passengerData) => {
    setData((prevData) =>
      prevData.map((flight) => {
        if (flight.id === flightId) {
          const updatedSeats = flight.seats.map((seat) => {
            if (seat.number === seatBought) {
              return { ...seat, available: false };
            }
            return seat;
          });

          return { ...flight, seats: updatedSeats };
        }

        return flight;
      })
    );
    setIsSearchFlights(false);
    setIsBuy(true);
  };

  const handleCloseAlertSuccess = () => {
    setIsBuy(false);
  };

  return (
    <>
      {errorMessage ? (
        <FetchError errorMessage={errorMessage} onClick={handleAlertClick} />
      ) : (
        <FlightContext.Provider value={{ setFlightsParams, setBuyTicket }}>
          <FlightSearch
            availableAirports={availableAirports}
            onSetSearch={handleSetSearch}
            isBuyProcess={isBuy}
          />
          <FlightList
            flightList={flightList}
            isSearchFlights={isSearchFlights}
          />
          {isBuy ? <AlertSuccess onClose={handleCloseAlertSuccess} /> : null}
        </FlightContext.Provider>
      )}
    </>
  );
};

export default App;
