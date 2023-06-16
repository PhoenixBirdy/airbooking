import React, { useState, useEffect } from 'react';
import { Alert, AlertTitle, LinearProgress, Typography } from '@mui/material';
import { COUNT_5, SECONDS_1 } from '../constants/common';

const AlertSuccess = ({ onClose }) => {
  const [counter, setCounter] = useState(COUNT_5);

  const handleAutoClose = () => {
    onClose();
  };
  useEffect(() => {
    const idTimer = setInterval(() => {
      if (counter) {
        setCounter((prev) => prev - 1);
      } else {
        clearInterval(idTimer);
      }
    }, SECONDS_1);

    return () => {
      clearInterval(idTimer);
    };
  }, [counter, onClose]);

  return (
    <>
      {counter ? (
        <>
          <Typography>
            {counter >= 2
              ? 'Connecting with your bank...'
              : 'Send information to airport server...'}
          </Typography>
          <LinearProgress />
        </>
      ) : (
        <Alert
          severity="success"
          onClose={counter ? null : () => handleAutoClose()}
        >
          <AlertTitle>Success</AlertTitle>
          You bought ticket to airplane! Congratulations!!!
        </Alert>
      )}
    </>
  );
};

export default AlertSuccess;
