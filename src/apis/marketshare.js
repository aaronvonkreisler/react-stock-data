import axios from 'axios';

const KEY = '7f732647773b94d0ff177f7e811be30e';

export default axios.create({
   baseURL: 'http://api.marketstack.com/v1/',
   params: {
      access_key: KEY,
   },
});
