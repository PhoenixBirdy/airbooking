import MOCKED_DATA from '../constants/mockedData';
import { FETCH_MESSAGE_ERROR } from '../constants/errors';
import { SECONDS_1 } from '../constants/common';

const fetchData = () => {
  return new Promise((resolve, reject) => {
    const number = Math.random();
    const isError = number < 0.7 ? false : true;

    setTimeout(() => {
      if (isError) {
        reject(FETCH_MESSAGE_ERROR);
      } else {
        resolve(MOCKED_DATA);
      }
    }, SECONDS_1);
  });
};

export default fetchData;
