import React from 'react';
import { Alert, Button, AlertTitle } from '@mui/material';

const FetchError = ({ errorMessage, onClick }) => {
  return (
    <Alert
      severity="error"
      action={
        <Button size="small" onClick={onClick}>
          REFRESH PAGE
        </Button>
      }
    >
      <AlertTitle>Error</AlertTitle>
      {errorMessage}
    </Alert>
  );
};

export default FetchError;
