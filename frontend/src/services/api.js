import axios from 'axios';

const api = axios.create({
  //BASEURL LOCAL
  baseURL: 'http://localhost:3333/api',
  //BASEURL HEROKU
  // baseURL: 'https://flash-benefits.herokuapp.com/api',
});

export default api;
