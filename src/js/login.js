import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basiclightbox.min.css';
import { loginUserService } from './api';
import { key } from './refs';

const loginModal = basicLightbox.create(document.querySelector('#login'));

export function openLoginModal() {
  loginModal.show();

  const loginForm = document.querySelector('.login-form');
  loginForm.addEventListener('submit', loginUser);
}

async function loginUser(event) {
  event.preventDefault();

  const { email, password } = event.currentTarget.elements;
  try {
    const data = await loginUserService({
      email: email.value,
      password: password.value,
    });
    localStorage.setItem(key, data.token);
    location.replace('/contacts.html');
  } catch (err) {
    console.log(err);
  }
}
