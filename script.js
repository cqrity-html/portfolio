import { works } from "./works.js";
import { certificates } from "./certificates.js";

const certificateLinks = document.querySelectorAll('.certificates-link');
const certificatePreview = document.querySelector('.big-picture');
const certificateImage = document.querySelector('.big-picture img');
const previewClose = document.querySelector('.big-picture__cancel');

for (let i = 0; i < certificateLinks.length; i++) {
  certificateLinks[i].addEventListener('click', function (evt) {
    evt.preventDefault();
    certificatePreview.classList.remove('hidden');
    certificateImage.src = `img/${i}.jpg`;
    document.body.classList.add('modal-open');
    document.addEventListener('click', onRandomClick);
    previewClose.addEventListener('click', closeFullSize);

    window.addEventListener('keydown', (evt) => {
      if (evt.key === 'Esc' || evt.key === 'Escape') {
        evt.preventDefault();
        closeFullSize();
      }
    });
  });
}

function closeFullSize() {
  certificatePreview.classList.add('hidden');
  document.body.classList.remove('modal-open');
  document.removeEventListener('click', onRandomClick);
}

function onRandomClick(evt) {
  if (evt.target.matches('.big-picture')) {
    certificatePreview.classList.add('hidden');
    document.body.classList.remove('modal-open');
  }
}

(function renderWorks() {
  works.forEach((work) => {
    const { url, photoSrc, heading, description } = work;
    document.querySelector(".works-list").insertAdjacentHTML(
      "beforeend",
      `
    <li class="works-item">
    <a href=${url} class="works-link" target="_blank">
      <img class="works-photo" src=${photoSrc}>
      <h3>${heading}</h3>
      <p>${description}</p>
    </a>
  </li>
    `
    );
  });
})();

(function renderCertifiacates() {
  certificates.forEach((certificate) => {
    const { photoSrc, heading, description } = certificate;
    document.querySelector(".certificates-list").insertAdjacentHTML(
      "beforeend",
      `
      <li class="certificates-item">
      <a class="certificates-link">
        <img class="certificates-photo" src=${photoSrc}>
        <h3>${heading}</h3>
        <p>${description}</p>
      </a>
    </li>
    `
    );
  });
})();
