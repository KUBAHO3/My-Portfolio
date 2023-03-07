function ReadElement(selector) {
  return document.querySelector(selector);
}

const menu = ReadElement('#menu-icon');
const nav = ReadElement('.mobile-nav');
const WorkModal = ReadElement('.modal-section');
const closeNav = ReadElement('.close-button');
const viewModal = ReadElement('.view-modal');

function AddMenu(selected, modalPart, opener) {
  return selected.addEventListener('click', () => {
    const {
      scrollY,
    } = window;
    modalPart.classList.add(opener);
    modalPart.style.top = `${scrollY}px`;
  });
}

function RemoveMenu(selected, modalPart, remover) {
  return selected.addEventListener('click', () => modalPart.classList.remove(remover));
}

AddMenu(menu, nav, 'nav-toggle');
AddMenu(viewModal, WorkModal, 'nav-toggle');
RemoveMenu(WorkModal, WorkModal, 'nav-toggle');
RemoveMenu(closeNav, nav, 'nav-toggle');
RemoveMenu(nav, nav, 'nav-toggle');

// WorkModal.style.top = topPos;
// const details = {
//   data: [
//     {
//       title: 'Tonic',
//       name: 'CANOPY',
//       technology: 'Back End Dev',
//       year: '2025',
//       imageUrl: 'images/Snapshoot-Portfolio.png',
//       description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.
//                     Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
//                     when an unknown printer took a galley of type and scrambled it to
//                     make a type specimen book. It has survived not only five centuries,
//                     but also the leap into electronic typesetting, remaining essent",
//       languages: ['html', 'css', 'javascript', 'github', 'ruby', 'Bootstraps'],
//       liveLink: 'https://www.linkedin.com/in/kubaho-linne-heaven-78ab37208/',
//       sourceCode: 'https://github.com/KUBAHO3',
//     },
//   ],
// };
