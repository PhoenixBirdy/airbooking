import React, { useState } from 'react';
import {
  Button,
  Modal,
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  Box,
  Stack,
  FormHelperText,
} from '@mui/material';
import { showOnError, checkValidity } from '../helpers/errors';
import {
  LATIN_TEXT_ERROR,
  DIGITS_ERROR,
  GENDER_SELECT_ERROR,
} from '../constants/errors';
import { CUSTOM_WIDTH_320, FULL_HEIGHT } from '../constants/common';

const PassengerDetailsModal = ({
  open,
  onCloseModal,
  onBookTicket,
  seat,
  flightId,
  onCancelBooking,
}) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [gender, setGender] = useState('');
  const [passport, setPassport] = useState('');
  const [errors, setErrors] = useState({});

  const handleFirstNameChange = (event) => {
    const { value } = event.target;
    if (/^[a-zA-Z\s]*$/.test(value)) {
      setFirstName(value);
    }
  };

  const handleLastNameChange = (event) => {
    const { value } = event.target;
    if (/^[a-zA-Z\s]*$/.test(value)) {
      setLastName(value);
    }
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handlePassportChange = (event) => {
    const { value } = event.target;
    if (/^\d*$/.test(value)) {
      setPassport(value);
    }
  };

  const handleSubmit = () => {
    const formErrors = checkValidity([
      { firstName },
      { lastName },
      { gender },
      { passport },
    ]);
    setErrors(formErrors);

    if (Object.keys(formErrors).length === 0) {
      const passengerData = {
        firstName,
        lastName,
        gender,
        passport,
      };
      onBookTicket(seat, passengerData);
    }
  };

  const handleClearPassengerData = () => {
    setFirstName('');
    setLastName('');
    setGender('');
    setPassport('');
  };

  const handleClose = () => {
    setErrors({});
    handleClearPassengerData();
    onCancelBooking();
    onCloseModal();
  };

  return (
    <Modal open={open} onClose={onCloseModal}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        height={FULL_HEIGHT}
      >
        <Box
          bgcolor="white"
          p={2}
          minWidth={CUSTOM_WIDTH_320}
          maxWidth="80vw"
          borderRadius="4px"
        >
          <Typography variant="h6" component="h2" color="blue">
            Booking Flight
          </Typography>
          <Stack flexDirection="row" useFlexGap spacing={2} mb={2}>
            <Typography>Seat: {seat}</Typography>
            <Typography>Flight id: {flightId}</Typography>
          </Stack>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                InputLabelProps={{ shrink: true }}
                label="First Name"
                value={firstName}
                onChange={handleFirstNameChange}
                fullWidth
                required
                error={errors.firstName}
                helperText={showOnError(errors.firstName, {
                  message: LATIN_TEXT_ERROR,
                })}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                InputLabelProps={{ shrink: true }}
                label="Last Name"
                value={lastName}
                onChange={handleLastNameChange}
                fullWidth
                required
                error={errors.lastName}
                helperText={showOnError(errors.lastName, {
                  message: LATIN_TEXT_ERROR,
                })}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth error={errors.gender} required>
                <InputLabel shrink id="genderLabel">
                  Gender
                </InputLabel>
                <Select
                  value={gender}
                  onChange={handleGenderChange}
                  labelId="genderLabel"
                  notched
                  label="Gender"
                >
                  <MenuItem value="male">Male</MenuItem>
                  <MenuItem value="female">Female</MenuItem>
                </Select>

                <FormHelperText>
                  {showOnError(errors.gender, { message: GENDER_SELECT_ERROR })}
                </FormHelperText>
              </FormControl>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                InputLabelProps={{ shrink: true }}
                label="Passport"
                value={passport}
                onChange={handlePassportChange}
                fullWidth
                required
                error={errors.passport}
                helperText={showOnError(errors.passport, {
                  message: DIGITS_ERROR,
                })}
              />
            </Grid>
          </Grid>
          <Grid mt={3} justifyContent="center" container spacing={2}>
            <Grid item>
              <Button variant="outlined" onClick={handleClose}>
                Back
              </Button>
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
              >
                Book Ticket
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Modal>
  );
};

export default PassengerDetailsModal;
