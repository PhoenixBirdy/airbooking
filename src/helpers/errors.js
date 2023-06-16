const showOnError = (isError, { message } = {}) => (isError ? message : '');

const checkValidity = (errors) =>
  errors.reduce((accumulationError, error) => {
    const key = Object.keys(error);
    const isErrorField = !error[key];

    return isErrorField
      ? { ...accumulationError, [key]: isErrorField }
      : accumulationError;
  }, {});

export { showOnError, checkValidity };
