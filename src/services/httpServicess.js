import axios from 'axios';
import logger from './logServicess';

axios.defaults.baseURL = process.env.REACT_APP_API_URL;


axios.interceptors.response.use(null,error=>{
  //console.log('interceptor called 1');
  const unexpectedError = error.response && error.response.status >= 400  && error.response.status < 500
  if(!unexpectedError){
    logger.logError(error);
    alert('UNexpected error occurs')
  }

  return Promise.reject(error)  //we have to retuen it, in order to call the catch block automatically
})

export default {
    get:axios.get,  //get data from server
    post:axios.post, //create new data
    put:axios.put, // change data
    delete: axios.delete //delete data

}