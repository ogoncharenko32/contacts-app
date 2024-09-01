import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basiclightbox.min.css';
import { createUserService } from './api';
import { key } from './refs';

const registerModal = basicLightbox.create(document.querySelector('#register'));

export function openModal() {
  registerModal.show();

  const registerForm = document.querySelector('.register-form');
  registerForm.addEventListener('submit', onSubmitForm);
}

async function onSubmitForm(event) {
  event.preventDefault();

  const { name, email, password } = event.currentTarget.elements;
  try {
    const data = await createUserService({
      name: name.value,
      email: email.value,
      password: password.value,
    });
    localStorage.setItem(key, data.token);
    location.replace('/contacts.html');
  } catch (err) {
    console.log(err);
  }
}
