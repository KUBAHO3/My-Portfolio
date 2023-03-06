const menu = ReadElement('#menu-icon');
const nav = ReadElement('.mobile-nav');
const close_nav = ReadElement('.close-button');
const choose = ReadElement('.mobile-nav');

AddMenu(menu);
RemoveMenu(close_nav);
RemoveMenu(choose);

function AddMenu (selected){
    return selected.addEventListener('click', () => nav.classList.add('nav-toggle'));
}

function RemoveMenu (selected){
    return selected.addEventListener('click', () => nav.classList.remove('nav-toggle'));
}

function ReadElement (selector){
    return document.querySelector(selector);
}