import axios from 'axios';

export function addPost(posdData) {
  return axios.post(import.meta.env.VITE_BASE_URL + 'post', posdData);
}
export function deletePost(postId) {
  return axios.delete(import.meta.env.VITE_BASE_URL + `post/${postId}`);
}
export function getPostWithParms(id) {
  return axios.get(import.meta.env.VITE_BASE_URL + 'post', {
    params: {
      creatorId: id,
    },
  });
}
export function updatePost(postId, posdData) {
  return axios.put(import.meta.env.VITE_BASE_URL + `post/${postId}`, posdData);
}
export function getPost(postId) {
  return axios.get(import.meta.env.VITE_BASE_URL + `post/${postId}`);
}
export function login(values) {
  return axios.post(import.meta.env.VITE_BASE_URL + 'login', {
    ...values,
  });
}
export function register(values) {
  return axios.post(import.meta.env.VITE_BASE_URL + 'register', {
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
