function ReadElement(selector) {
  return document.querySelector(selector);
}

const menu = ReadElement('#menu-icon');
const nav = ReadElement('.mobile-nav');
const WorkModal = ReadElement('.modal-section');
const closeNav = ReadElement('.close-button');
const viewModal1 = ReadElement('.view-modal1');
const viewModal2 = ReadElement('.view-modal2');
const viewModal3 = ReadElement('.view-modal3');
const viewModal4 = ReadElement('.view-modal4');
const emailer = ReadElement('#useremail');
const uname = ReadElement('#username');
const message = ReadElement('#description');
const validator = ReadElement('.validator');
const submitbtn = ReadElement('#submit-form');

let myMessage;
let userName;
let email;

let userData = [];

function UpdateInput(selected) {
  function myFunction() {
    email = emailer.value;
    userName = uname.value;
    myMessage = message.value;
    userData = [userName, email, myMessage];
    localStorage.setItem('userData', userData);
  }
  selected.addEventListener('change', myFunction);
}

myMessage = UpdateInput(message);
userName = UpdateInput(uname);
email = UpdateInput(emailer);

if (localStorage.getItem('userData') !== null) {
  const myFormData = localStorage.getItem('userData');
  const myFormDataArray = myFormData.split(',');
  
  if (myFormDataArray.length > 0) {
    [uname.value, emailer.value, message.value] = myFormDataArray;
  }
}

function EmailValidation(e) {
  const email = emailer.value;
  let text;
  if (email === email.toLowerCase() && email !== '') {
    text = 'Email is inserted in lowercase as required';
    validator.innerHTML = text;
    validator.classList.add('validator-green');
    submitbtn.style.marginTop = '20px';
  } else {
    text = 'Email is required and has to be in lowercase';
    validator.innerHTML = text;
    validator.classList.remove('validator-green');
    validator.classList.add('validator-red');
    submitbtn.style.marginTop = '20px';
    e.preventDefault();
  }
}
submitbtn.addEventListener('submit', (e) => EmailValidation(e));

function RemoveMenu(selected, modalPart, remover) {
  return selected.addEventListener('click', () => modalPart.classList.remove(remover));
}

const details = [
  {
    title: 'Todo Lists',
    name: 'Tasks Management system',
    technology: 'Front End Dev',
    year: '2023',
    imageUrl: 'images/real_todo.png',
    description: "The ToDo List for task management with CRUD operations developed in JavaScript plain with addition of Html&Css technologies",
    languages: ['html', 'css', 'javascript', 'github', 'Bootstraps'],
    liveLink: 'https://kubaho3.github.io/To-Do-List/dist/',
    sourceCode: 'https://github.com/KUBAHO3/To-Do-List/',
  }, {
    title: 'Multi-Post Stories',
    name: 'CANOPY',
    technology: 'Back End Dev',
    year: '2025',
    imageUrl: 'images/Snapshoot-Portfolio4.png',
    description: "A daily selection of privately personalized reads; no accounts or sign-ups required. ry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    languages: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstraps'],
    liveLink: 'https://www.linkedin.com/in/kubaho-linne-heaven-78ab37208/',
    sourceCode: 'https://github.com/KUBAHO3',
  }, {
    title: 'Tonic',
    name: 'CANOPY',
    technology: 'Back End Dev',
    year: '2025',
    imageUrl: 'images/Snapshoot-Portfolio2.png',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    languages: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstraps'],
    liveLink: 'https://www.linkedin.com/in/kubaho-linne-heaven-78ab37208/',
    sourceCode: 'https://github.com/KUBAHO3',
  }, {
    title: 'Multi-Post Stories',
    name: 'CANOPY',
    technology: 'Back End Dev',
    year: '2025',
    imageUrl: 'images/Snapshoot-Portfolio3.png',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essent",
    languages: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstraps'],
    liveLink: 'https://www.linkedin.com/in/kubaho-linne-heaven-78ab37208/',
    sourceCode: 'https://github.com/KUBAHO3',
  },
];

function renderModal(number) {
  const work = details[number];
  const modalInstance = ` <div class=" work-modal">
      <div class="work-modal-head">
          <h1 class="title work-modal-head">${work.title}</h1>
          <span class="close-modal">x</span>
      </div>
      <div class="position work-modal-head-body">
          <h4 class="place">${work.name}</h4>
          <H5 class="post-name">&#x25cf; ${work.technology}</H5>
          <H5 class="post-year">&#x25cf; ${work.year}</H5>
      </div>
      <img class="work-modal-img" src=${work.imageUrl} alt="The Snapshoot-Portfolio image">
      <div class="work-modal-middle">
      <p class="description">
      ${work.description}
          </p>
          <div class="work-modal-middle-group">
              <div class="techs" id="techs">
                  ${work.languages.map((lang) => `<div class="single-tech" id="techs-item">${lang}</div>`).join('')}
                
                  </div>
                    <hr class="work-modal-hr">
                    <div class="work-modal-btn-grp">
                    <a href=${work.liveLink} id="btn-link" ><button type="button" class="view-more work-modal-btn">See live <img class="btn-icon" src="images/icons/Icon.png" alt="icon img"></button></a>
                    <a href=${work.sourceCode} id="btn-link" <button type="button" class="view-more work-modal-btn">See Source <img class="btn-icon" src="images/icons/Vector.png" alt="icon img"></button></a>
                  </div>
              </div> 
          </div>
    </div>`;

  WorkModal.innerHTML = modalInstance;
}

function AddMenu(selected, modalPart, opener, number) {
  return selected.addEventListener('click', () => {
    modalPart.classList.add(opener);
    modalPart.style.top = '0px';

    if (number) {
      renderModal(number - 1);
    }
  });
}

AddMenu(menu, nav, 'nav-toggle');
AddMenu(viewModal1, WorkModal, 'nav-toggle', 1);
AddMenu(viewModal2, WorkModal, 'nav-toggle', 2);
AddMenu(viewModal3, WorkModal, 'nav-toggle', 3);
AddMenu(viewModal4, WorkModal, 'nav-toggle', 4);
RemoveMenu(WorkModal, WorkModal, 'nav-toggle');
RemoveMenu(closeNav, nav, 'nav-toggle');
RemoveMenu(nav, nav, 'nav-toggle');