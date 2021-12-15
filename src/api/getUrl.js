import axios from 'axios';
import { resolve } from './resolve';

export const getUrl = async () => {
  let url = 'https://32l8ao0ym5.execute-api.ap-northeast-2.amazonaws.com/0-1/newsurl';

  return resolve(
      axios.get(url)
        .then((Response) => Response.data))
        .catch((Error)=>{console.log(Error);}
    )
};