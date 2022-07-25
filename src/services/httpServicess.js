import axios from 'axios';

//this is get based URL from environment variable  --> .env.development / .env.production
axios.defaults.baseURL = process.env.REACT_APP_API_URL;

export function setTokenInHeader(token) {
  if (token) {
    axios.defaults.headers.common['x-auth-token'] = token;
  }
}

axios.interceptors.response.use(null, (error) => {
  if (error.response.status === 401) {
    alert('Please login/register before CREATE, UPDATE and DELETE content');
  }
  if (error.response.status === 403) {
    alert('Sorry, only admin users can DELETE content');
  }
  // const unexpectedError =
  //   error.response &&
  //   error.response.status >= 404 &&
  //   error.response.status < 500;
  // if (!unexpectedError) {
  //   logger.logError(error);
  //   alert('UNexpected error occurs');
  // }

  return Promise.reject(error);
  //we have to retuen it, in order to call the catch block automatically
});

export default {
  get: axios.get, //get data from server
  post: axios.post, //create new data
  put: axios.put, // change data
  delete: axios.delete, //delete data
};
