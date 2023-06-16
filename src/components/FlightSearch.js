import React, { useState, useContext } from 'react';
import FlightContext from '../context/FlightsContext';
import {
  Autocomplete,
  TextField,
  Button,
  Stack,
  useMediaQuery,
  Box,
  Typography,
} from '@mui/material';
import {
  ARRIVAL_AIRPORT,
  CUSTOM_WIDTH_320,
  DEFAULT_FORM_VALUES,
  DEPARTURE_AIRPORT,
  DEPARTURE_DATE,
  FROM,
  MAX_LENGTH,
  MEDIA_MIN_WIDTH_800,
  TO,
} from '../constants/common';
import { excludeSamePointAirport } from '../helpers/common';

const FlightSearch = ({ availableAirports, onSetSearch, isBuyProcess }) => {
  const { setFlightsParams } = useContext(FlightContext);
  const { departureList, arrivalList } = availableAirports;
  const [formValues, setFormValues] = useState(DEFAULT_FORM_VALUES);
  const match = useMediaQuery(MEDIA_MIN_WIDTH_800);

  const isDisabledSubmitButton =
    !formValues[DEPARTURE_AIRPORT] ||
    !formValues[ARRIVAL_AIRPORT] ||
    !formValues[DEPARTURE_DATE];

  const handleChange = (name) => (event, value) => {
    const newValue = name === DEPARTURE_DATE ? event.target.value : value;

    onSetSearch();
    setFormValues((prevFormValues) => ({
      ...prevFormValues,
      [name]: newValue || '',
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFlightsParams(formValues);
  };

  return (
    <Box minWidth={CUSTOM_WIDTH_320} mb={3}>
      <Typography variant="h6" component="h2" mb={2} color="blue">
        Search of the Flights
      </Typography>

      <form onSubmit={handleSubmit}>
        <Stack spacing={2} direction={match ? 'row' : 'column'} flexWrap={true}>
          <Autocomplete
            disabled={isBuyProcess}
            disablePortal
            onChange={handleChange(DEPARTURE_AIRPORT)}
            sx={{ width: match ? 1 / 3 : 1 }}
            options={excludeSamePointAirport(
              departureList,
              formValues[ARRIVAL_AIRPORT]
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                disabled={isBuyProcess}
                InputLabelProps={{ shrink: true }}
                label="Departure Airport"
                name={DEPARTURE_AIRPORT}
                placeholder={FROM}
                maxLength={MAX_LENGTH}
              />
            )}
          />

          <Autocomplete
            disabled={isBuyProcess}
            disablePortal
            onChange={handleChange(ARRIVAL_AIRPORT)}
            sx={{ width: match ? 1 / 3 : 1 }}
            options={excludeSamePointAirport(
              arrivalList,
              formValues[DEPARTURE_AIRPORT]
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                disabled={isBuyProcess}
                InputLabelProps={{ shrink: true }}
                label="Arrival Airport"
                name={ARRIVAL_AIRPORT}
                placeholder={TO}
                maxLength={MAX_LENGTH}
              />
            )}
          />
          <TextField
            sx={{ width: match ? 1 / 5 : 1 }}
            label="Departure Date"
            InputLabelProps={{ shrink: true }}
            type="date"
            name={DEPARTURE_DATE}
            onChange={handleChange(DEPARTURE_DATE)}
            value={formValues[DEPARTURE_DATE]}
            disabled={isBuyProcess}
          />
          <Button
            sx={{ width: match ? 1 / 5 : 1 }}
            type="submit"
            variant="contained"
            disabled={isDisabledSubmitButton || isBuyProcess}
          >
            Find&nbsp;flights
          </Button>
        </Stack>
      </form>
    </Box>
  );
};

export default FlightSearch;
