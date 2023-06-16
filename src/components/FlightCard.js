import React from 'react';
import SeatsList from './SeatsList';
import { Card, CardContent, Typography } from '@mui/material';

const FlightCard = ({ flight, onBookingData, bookingData }) => {
  const { from, to, departure, arrival, price, seats, duration, id } = flight;
  const departureTime = departure.split('T');
  const arrivalTime = arrival.split('T');

  return (
    <Card sx={{ flexShrink: '0' }}>
      <CardContent sx={{ background: 'lightblue', alignItems: 'flex-start' }}>
        <Typography variant="h6" component="h2">
          {from} - {to}
        </Typography>
        <Typography variant="body2">Flight id: {id}</Typography>
        <Typography variant="body2">
          Departure Time: {departureTime[0] + ' (' + departureTime[1] + ')'}
        </Typography>
        <Typography variant="body2">
          Arrival Time: {arrivalTime[0] + ' (' + arrivalTime[1] + ')'}
        </Typography>
        <Typography variant="body2">Duration: {duration}</Typography>
        <Typography variant="h6" component="h2">
          Price: ${price}
        </Typography>
        <SeatsList
          seats={seats}
          flightId={id}
          onBookingData={onBookingData}
          bookingData={bookingData}
        />
      </CardContent>
    </Card>
  );
};

export default FlightCard;
