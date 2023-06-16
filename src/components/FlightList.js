import React, { useState, useEffect } from 'react';
import {
  LinearProgress,
  Typography,
  Stack,
  Box,
  useMediaQuery,
} from '@mui/material';
import FlightCard from './FlightCard';
import BookingConfirmation from './BookingConfirmation';
import {
  CUSTOM_WIDTH_320,
  FULL_WIDTH,
  HALF_WIDTH,
  MEDIA_MIN_WIDTH_800,
  SECONDS_1,
  CUSTOM_HEIGHT_500,
} from '../constants/common';

const FlightList = ({ flightList, isSearchFlights }) => {
  const match = useMediaQuery(MEDIA_MIN_WIDTH_800);
  const [isLoading, setIsLoading] = useState(true);
  const [bookingData, setBookingData] = useState(null);

  useEffect(() => {
    setBookingData(null);
    const id = isSearchFlights
      ? setTimeout(() => {
          setIsLoading(false);
        }, SECONDS_1)
      : setIsLoading(true);
    return () => {
      isSearchFlights && clearTimeout(id);
    };
  }, [isSearchFlights]);

  const handleBookingData = (bookingData) => {
    setBookingData(bookingData);
  };

  const handleClearBookingData = () => {
    handleBookingData(null);
  };

  return (
    <>
      {isSearchFlights ? (
        <Box>
          {isLoading ? (
            <>
              <Typography>Loading information...</Typography>
              <LinearProgress />
            </>
          ) : (
            <Stack
              direction="row"
              flexWrap="wrap-reverse"
              pb={3}
              alignItems="flex-end"
              useFlexGap={true}
              spacing={2}
            >
              <Box
                flexGrow={1}
                minWidth={CUSTOM_WIDTH_320}
                maxWidth={match ? HALF_WIDTH : FULL_WIDTH}
              >
                <Typography variant="h6" component="h2" color="blue">
                  {`Flights found:(${flightList.length})`}
                </Typography>

                {flightList.length ? (
                  <Stack
                    flexDirection="columns"
                    spacing={2}
                    sx={{
                      maxHeight: CUSTOM_HEIGHT_500,
                      overflowY: 'auto',
                    }}
                  >
                    {flightList.map((flight) => (
                      <FlightCard
                        key={flight.id}
                        flight={flight}
                        bookingData={bookingData}
                        onBookingData={handleBookingData}
                      />
                    ))}
                  </Stack>
                ) : (
                  <Typography variant="body2">No Flights available</Typography>
                )}
              </Box>
              {bookingData ? (
                <BookingConfirmation
                  bookingData={bookingData}
                  onClearBookingData={handleClearBookingData}
                />
              ) : null}
            </Stack>
          )}
        </Box>
      ) : null}
    </>
  );
};

export default FlightList;
