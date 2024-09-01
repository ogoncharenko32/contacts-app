import {
  addContactService,
  deleteContactService,
  getContactsService,
  logoutService,
  token,
} from './api';
import { markupContact } from './markup';
import { contactsForm, contactsList, logoutBtn } from './refs';

if (!token) {
  location.replace('/');
}

contactsForm.addEventListener('submit', addContact);
contactsList.addEventListener('click', deleteContact);
logoutBtn.addEventListener('click', logoutFoo);

async function addContact(event) {
  event.preventDefault();

  const { name, number } = event.currentTarget.elements;

  try {
    const data = await addContactService({
      name: name.value,
      number: number.value,
    });
    contactsList.insertAdjacentHTML('beforeend', markupContact(data));
    contactsForm.reset();
  } catch (err) {
    console.log(err);
  }
}

async function onReloadPage() {
  try {
    const data = await getContactsService();
    contactsList.insertAdjacentHTML(
      'beforeend',
      data.map(markupContact).join('')
    );
  } catch (err) {
    console.log(err);
  }
}

onReloadPage();

async function deleteContact(event) {
  try {
    if (event.target.nodeName !== 'BUTTON') {
      return;
    }
    await deleteContactService(event.target.parentNode.id);
    event.target.parentNode.remove();
  } catch (err) {
    console.log(err);
  }
}

async function logoutFoo() {
  try {
    await logoutService();
  } catch (err) {
    console.log(err);
  }

  localStorage.removeItem('token');
  location.replace('/');
}
