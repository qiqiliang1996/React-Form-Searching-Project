import http from './httpServicess';

const registerApiEndpoint = '/users';

export const register = async (user) => {
  const response = await http.post(registerApiEndpoint, user);
  console.log(response, 'response from registerService.js 000');
  return response;
};
