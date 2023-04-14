import {isEscapeKey} from './util.js';
import {onUploadCancelButtonClick, onDocumentKeydown} from './form.js';

const body = document.querySelector('body');
const successMessageTemplate = document.querySelector('#success').content.querySelector('.success').cloneNode(true);
const successButton = successMessageTemplate.querySelector('.success__button');
const errorMessageTemplate = document.querySelector('#error').content.querySelector('.error').cloneNode(true);
const errorButton = errorMessageTemplate.querySelector('.error__button');

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
  body.appendChild(errorMessageTemplate);

  document.addEventListener('click', onErrorOutModalClick);
  errorButton.addEventListener('click', closeErrorMessage);
  document.removeEventListener('keydown', onDocumentKeydown);
  document.addEventListener('keydown', closeErrorKeydown);
};

const showSuccessMessage = () => {
  body.appendChild(successMessageTemplate);

  document.addEventListener('click', onSuccessOutModalClick);
  successButton.addEventListener('click', closeSuccessMessage);
  document.removeEventListener('keydown', onDocumentKeydown);
  document.addEventListener('keydown', closeSuccessKeydown);
};

export {showErrorMessage, showSuccessMessage};
