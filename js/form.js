import {isEscapeKey} from './util.js';

const form = document.querySelector('.img-upload__form');
const body = document.querySelector('body');
const uploadOverlay = form.querySelector('.img-upload__overlay');
const uploadCancel = form.querySelector('.img-upload__cancel');
const uploadFile = form.querySelector('#upload-file');

//для закрытия по эскейп
const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    onCloseForm();
  }
};

function onCloseForm () {
  form.reset();
  uploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
}

const onOpenForm = () => {
  uploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);
};

uploadFile.addEventListener('change', onOpenForm);

uploadCancel.addEventListener('click', onCloseForm);
