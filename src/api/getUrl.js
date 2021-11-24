import axios from 'axios';
import { resolve } from './resolve';

export const getUrl = async (query, display) => {
  let url = `${process.env.REACT_APP_API_URL}`;
  return resolve(
    axios
      .get(url, {
        params: {
          query: `${query}`,
          display: `${display}`,
        },
        headers: {
          'X-Naver-Client-Id': process.env.REACT_APP_API_ID,
          'X-Naver-Client-Secret': process.env.REACT_APP_API_KEY,
        },
      })
      .then((res) => res.data),
  );
};
