import axios from 'axios';

export function login(values) {
  return axios.post('http://localhost:3000/login', {
    ...values,
  });
}
export function register(values) {
  return axios.post('http://localhost:3000/register', {
    ...values,
  });
}
export function setLogin(user) {
  const userString = JSON.stringify(user);
  localStorage.setItem('user', userString);
}
export function setLogout() {
  localStorage.removeItem('user');
}
export function checkLogin() {
  const user = localStorage.getItem('user');
  return JSON.parse(user);
}
