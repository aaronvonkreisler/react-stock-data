import axios from 'axios';

const KEY = 'YOUR_API_KEY';

export default axios.create({
   baseURL: 'http://api.marketstack.com/v1/',
   params: {
      access_key: KEY,
   },
});
