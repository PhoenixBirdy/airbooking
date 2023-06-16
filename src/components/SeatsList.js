import React, { useState, useContext } from 'react';
import PassengerDetailModal from './PassengerDetailModal';
import { Stack, Button } from '@mui/material';

const SeatsList = ({ seats, flightId, onBookingData, bookingData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [seatToBook, setSeatToBook] = useState('');

  const handleClick = (seatNumber) => {
    setSeatToBook(seatNumber);
    setIsOpen(true);
  };

  const handleCancelBooking = () => setSeatToBook('');

  const handleBookTicket = (seatBought, passengerData) => {
    onBookingData({
      flightId,
      seatBought,
      passengerData,
      onCancelBooking: handleCancelBooking,
    });
    handleCloseModal();
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Stack direction="row" spacing={1}>
        {seats.map((seat) => {
          const isSeatBooking = seat.number === seatToBook;
          const isDisableButton =
            !seat.available || isSeatBooking || Boolean(bookingData);
          const variantStyle =
            (bookingData && isSeatBooking) || (!bookingData && seat.available)
              ? 'contained'
              : 'outlined';

          return (
            <Button
              key={seat.id}
              variant={variantStyle}
              disabled={isDisableButton}
              onClick={() => handleClick(seat.number)}
            >
              {seat.number}
            </Button>
          );
        })}
      </Stack>
      <PassengerDetailModal
        open={isOpen}
        onCloseModal={handleCloseModal}
        onCancelBooking={handleCancelBooking}
        onBookTicket={handleBookTicket}
        seat={seatToBook}
        flightId={flightId}
      />
    </>
  );
};

export default SeatsList;

//все элементы выключены - сделано
//все элементы outlined, кроме isSeatBooking при bookingData = не пустом -> он единственный contained

//isSeatBooking  = true
//bookingData = truthy
//-> contained
