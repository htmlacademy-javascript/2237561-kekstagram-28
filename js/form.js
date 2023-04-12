import {isEscapeKey} from './util.js';
import {pristine} from './validate.js';
import {resetScale} from './scale.js';
import {resetEffects} from './effects.js';
import {sendData} from './api.js';
import {resetPhotoFields, setUserUploadPhoto} from './upload-photo.js';

const form = document.querySelector('.img-upload__form');
const body = document.querySelector('body');
const uploadOverlay = form.querySelector('.img-upload__overlay');
const uploadCancel = form.querySelector('.img-upload__cancel');
const uploadFile = form.querySelector('#upload-file');
const imgUploadText = form.querySelector('.img-upload__text');
const submitButton = form.querySelector('.img-upload__submit');
const SubmitButtonText = {
  IDLE: 'Сохранить',
  SENDING: 'Сохраняю...'
};

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    onUploadCancelButtonClick();
  }
};

function onUploadCancelButtonClick () {
  form.reset();
  pristine.reset();
  resetScale();
  resetEffects();
  resetPhotoFields();
  uploadOverlay.classList.add('hidden');
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onDocumentKeydown);
}

const onUploadFileClick = () => {
  uploadOverlay.classList.remove('hidden');
  body.classList.add('modal-open');
  setUserUploadPhoto(uploadFile);
  document.addEventListener('keydown', onDocumentKeydown);
};

uploadFile.addEventListener('change', onUploadFileClick);

uploadCancel.addEventListener('click', onUploadCancelButtonClick);

imgUploadText.addEventListener('keydown', (evt) => {
  if (isEscapeKey){
    evt.stopPropagation();
  }
});

const blockSubmitButton = () => {
  submitButton.disabled = true;
  submitButton.textContent = SubmitButtonText.SENDING;
};

const unblockSubmitButton = () => {
  submitButton.disabled = false;
  submitButton.textContent = SubmitButtonText.IDLE;
};

const setUserFormSubmit = ({onSuccess, onError}) => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    const isValid = pristine.validate();
    if (isValid) {
      blockSubmitButton();
      sendData(new FormData(evt.target))
        .then(onSuccess)
        .catch((err) => {
          onError(err);
        })
        .finally(() => {
          unblockSubmitButton();
        });
    }
  });
};

export {blockSubmitButton, unblockSubmitButton, setUserFormSubmit, onUploadFileClick, onUploadCancelButtonClick, onDocumentKeydown};
