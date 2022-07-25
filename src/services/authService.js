import http, { setTokenInHeader } from './httpServicess';
import jwt_decode from 'jwt-decode';

const authApiEndpoint = '/auth';

export const login = async (user) => {
  const { data: jwt } = await http.post(authApiEndpoint, user);
  localStorage.setItem('token', jwt);
  return jwt;
};

export const logout = async () => {
  localStorage.removeItem('token');
};

export const getCurrentUserFromLocalStorage = () => {
  try {
    const token = localStorage.getItem('token');
    const user = jwt_decode(token);
    return user;
  } catch (ex) {
    return null;
  }
};

export const loginWithJwt = (response) => {
  console.log(response, 'response authService 222');
  const token = response.headers['x-auth-token'];
  localStorage.setItem('token', token);
};

export const getTokenFromLocalStorage = () => {
  const token = localStorage.getItem('token');
  // console.log(token, 'token from local storage xoxo');
  return token;
};

setTokenInHeader(getTokenFromLocalStorage());
