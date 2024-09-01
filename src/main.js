import { token } from './js/api';
import { openLoginModal } from './js/login';
import { registerBtn, loginBtn } from './js/refs';
import { openModal } from './js/register';

if (token) {
  location.replace('/contacts.html');
}

registerBtn.addEventListener('click', openModal);
loginBtn.addEventListener('click', openLoginModal);
