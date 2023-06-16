import MOCKED_DATA from '../constants/mockedData';

const fetchData = () => {
  return new Promise((resolve, reject) => {
    const number = Math.random();
    const isError = number < 1 ? false : true;
    setTimeout(() => {
      if (isError) {
        reject("Can't fetch data from server! - (EMULATED ERROR 30%)");
      } else {
        resolve(MOCKED_DATA);
      }
    }, 2000);
  });
};

export default fetchData;
