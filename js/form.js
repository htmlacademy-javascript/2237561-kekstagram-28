import {isEscapeKey, showAlert} from './util.js';
import {pristine} from './validate.js';
import {resetScale} from './scale.js';
import {resetEffects} from './effects.js';
import {sendData} from './api.js';

const form = document.querySelector('.img-upload__form');
const body = document.querySelector('body');
const uploadOverlay = form.querySelector('.img-upload__overlay');
const uploadCancel = form.querySelector('.img-upload__cancel');
const uploadFile = form.querySelector('#upload-file');
const commentField = form.querySelector('.text__description');
const hashtagField = form.querySelector('.text__hashtags');
const submitButton = form.querySelector('.img-upload__submit');
const SubmitButtonText = {
  IDLE: 'Сохранить',
  SENDING: 'Сохраняю...'
};

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    onCloseForm();
  }
};

function onCloseForm () {
  form.reset();
  pristine.reset();
  resetScale();
  resetEffects();
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

commentField.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape'){
    evt.stopPropagation();
  }
});

hashtagField.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape'){
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

<<<<<<< HEAD
const setUserFormSubmit = ({onSuccess, onError}) => {
=======
const setUserFormSubmit = (onSuccess) => {
>>>>>>> 2367b0ef2cdb8f95525bc32a3f64fe30235d662a
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();

    const isValid = pristine.validate();
    if (isValid) {
      blockSubmitButton();
      sendData(new FormData(evt.target))
        .then(onSuccess)
        .catch((err) => {
<<<<<<< HEAD
          onError(err);
        })
        .finally(() => {
          unblockSubmitButton();
=======
          showAlert(err.message);
>>>>>>> 2367b0ef2cdb8f95525bc32a3f64fe30235d662a
        });
    }
  });
};

export {blockSubmitButton, unblockSubmitButton, setUserFormSubmit, onOpenForm, onCloseForm, onDocumentKeydown};
