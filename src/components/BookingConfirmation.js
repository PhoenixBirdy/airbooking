import React, { useContext } from 'react';
import {
  Button,
  Typography,
  Card,
  CardContent,
  Box,
  useMediaQuery,
  Grid,
} from '@mui/material';
import FlightContext from '../context/FlightsContext';
import {
  FULL_WIDTH,
  HALF_WIDTH,
  MEDIA_MIN_WIDTH_800,
  CUSTOM_WIDTH_320,
} from '../constants/common';

const BookingConfirmation = ({ bookingData, onClearBookingData }) => {
  const { setBuyTicket } = useContext(FlightContext);
  const match = useMediaQuery(MEDIA_MIN_WIDTH_800);
  const { passengerData, flightId, seatBought, onCancelBooking } = bookingData;

  const handleCancelClick = () => {
    onClearBookingData();
    onCancelBooking();
  };

  return (
    <Box
      flexGrow={1}
      minWidth={CUSTOM_WIDTH_320}
      maxWidth={match ? HALF_WIDTH : FULL_WIDTH}
    >
      <Typography variant="h6" component="h2" color="blue">
        Booking information
      </Typography>
      <Card p={4} sx={{ background: 'lightgreen' }}>
        <CardContent>
          <Typography variant="body2">Flight id: {flightId}</Typography>
          <Typography variant="body2">Seat: {seatBought}</Typography>
          <Typography variant="body2">
            First Name: {passengerData.firstName}
          </Typography>
          <Typography variant="body2">
            Last Name: {passengerData.lastName}
          </Typography>
          <Typography variant="body2">
            Gender: {passengerData.gender}
          </Typography>
          <Typography variant="body2">
            Passport: {passengerData.passport}
          </Typography>
          <Grid container spacing={1} paddingTop={3}>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                onClick={() =>
                  setBuyTicket(flightId, seatBought, passengerData)
                }
              >
                Buy
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="outlined"
                color="secondary"
                onClick={handleCancelClick}
              >
                Cancel
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

export default BookingConfirmation;
