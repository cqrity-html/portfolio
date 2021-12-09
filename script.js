const certificateLinks = document.querySelectorAll('.certificates-link');
const certificatePreview = document.querySelector('.big-picture');
const certificateImage = document.querySelector('.big-picture img');
const previewClose = document.querySelector('.big-picture__cancel');

for (let i = 0; i < certificateLinks.length; i++) {
  certificateLinks[i].addEventListener('click', function (evt) {
    evt.preventDefault();
    certificatePreview.classList.remove('hidden');
    certificateImage.src = evt.target.src;
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
