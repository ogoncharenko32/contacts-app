import axios from 'axios';
import { key } from './refs';

export const token = localStorage.getItem(key);

axios.defaults.baseURL = 'https://connections-api.goit.global/';
axios.defaults.headers.common.Authorization = `Bearer ${token}`;

export async function createUserService(user) {
  const { data } = await axios.post('/users/signup', user);
  return data;
}

export async function loginUserService(user) {
  const { data } = await axios.post('/users/login', user);
  return data;
}

export async function addContactService(contact) {
  const { data } = await axios.post('/contacts', contact);
  return data;
}

export async function getContactsService(contact) {
  const { data } = await axios.get('/contacts');
  return data;
}

export async function deleteContactService(contactId) {
  const { data } = await axios.delete(`/contacts/${contactId}`);
  return data;
}

export async function logoutService() {
  const { data } = await axios.post('/users/logout');
  return data;
}
