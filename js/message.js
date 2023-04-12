import {isEscapeKey} from './util.js';
import {onUploadCancelButtonClick, onDocumentKeydown} from './form.js';

const successMessageTemplate = document.querySelector('#success').content;
const errorMessageTemplate = document.querySelector('#error').content;

const closeErrorMessage = () => {
  document.querySelector('.error').remove();
  document.addEventListener('keydown', onDocumentKeydown);
  document.removeEventListener('keydown', closeErrorKeydown);
};

const closeSuccessMessage = () => {
  document.querySelector('.success').remove();
  document.addEventListener('keydown', onDocumentKeydown);
  document.removeEventListener('keydown', closeSuccessKeydown);
};

function closeSuccessKeydown (evt) {
  if (isEscapeKey(evt)) {
    closeSuccessMessage();
    onUploadCancelButtonClick();
  }
}

function closeErrorKeydown (evt) {
  if (isEscapeKey(evt)) {
    closeErrorMessage();
  }
}

const onSuccessOutModalClick = (evt) => {
  if(evt.target.matches('.success')){
    closeSuccessMessage();
    onUploadCancelButtonClick();
  }
};

const onErrorOutModalClick = (evt) => {
  if(evt.target.matches('.error')){
    closeErrorMessage();
  }
};

const showErrorMessage = () => {
  const errorMessage = errorMessageTemplate.cloneNode(true);
  document.body.appendChild(errorMessage);
  const errorModal = document.querySelector('.error');
  const errorButton = document.querySelector('.error__button');

  errorModal.addEventListener('click', onErrorOutModalClick);
  errorButton.addEventListener('click', closeErrorMessage);
  document.removeEventListener('keydown', onDocumentKeydown);
  document.addEventListener('keydown', closeErrorKeydown);
};

const showSuccessMessage = () => {
  const successMessage = successMessageTemplate.cloneNode(true);
  document.body.appendChild(successMessage);
  const successModal = document.querySelector('.success');
  const successButton = document.querySelector('.success__button');

  successModal.addEventListener('click', onSuccessOutModalClick);
  successButton.addEventListener('click', closeSuccessMessage);
  document.removeEventListener('keydown', onDocumentKeydown);
  document.addEventListener('keydown', closeSuccessKeydown);
};

export {showErrorMessage, showSuccessMessage};
