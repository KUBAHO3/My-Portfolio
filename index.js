function ReadElement(selector) {
  return document.querySelector(selector);
}

const menu = ReadElement('#menu-icon');
const nav = ReadElement('.mobile-nav');
const closeNav = ReadElement('.close-button');
const choose = ReadElement('.mobile-nav');

function AddMenu(selected) {
  return selected.addEventListener('click', () => nav.classList.add('nav-toggle'));
}

function RemoveMenu(selected) {
  return selected.addEventListener('click', () => nav.classList.remove('nav-toggle'));
}

AddMenu(menu);
RemoveMenu(closeNav);
RemoveMenu(choose);