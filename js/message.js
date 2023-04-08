import {isEscapeKey} from './util.js';
import {onCloseForm, onDocumentKeydown} from './form.js';

const successMessageTemplate = document.querySelector('#success').content;
const errorMessageTemplate = document.querySelector('#error').content;

function closeErrorKeydown (evt) {
  if (isEscapeKey(evt)) {
    document.querySelector('.error').remove();
    document.addEventListener('keydown', onDocumentKeydown);
  }
}

function closeSuccessKeydown (evt) {
  if (isEscapeKey(evt)) {
    document.querySelector('.success').remove();
    onCloseForm();
  }
}

const onClickOutModal = (evt) => {
  if(evt.target.matches('.success')){
    document.querySelector('.success').remove();
    onCloseForm();
  }
  if(evt.target.matches('.error')){
    document.querySelector('.error').remove();
  }
};

const closeErrorMessage = () => {
  document.querySelector('.error').remove();
};

const showErrorMessage = function() {
  const errorMessage = errorMessageTemplate.cloneNode(true);
  document.body.append(errorMessage);
  const errorModal = document.querySelector('.error');
  const errorButton = document.querySelector('.error__button');

  errorModal.addEventListener('click', onClickOutModal);
  errorButton.addEventListener('click', closeErrorMessage);
  document.removeEventListener('keydown', onDocumentKeydown);
  document.addEventListener('keydown', closeErrorKeydown);
};

const closeSuccessMessage = () => {
  document.querySelector('.success').remove();
};

const showSuccessMessage = function() {
  const successMessage = successMessageTemplate.cloneNode(true);
  document.body.append(successMessage);
  const successModal = document.querySelector('.success');
  const successButton = document.querySelector('.success__button');

  successModal.addEventListener('click', onClickOutModal);
  successButton.addEventListener('click', closeSuccessMessage);
  document.removeEventListener('keydown', onDocumentKeydown);
  document.addEventListener('keydown', closeSuccessKeydown);
};

export {showErrorMessage, showSuccessMessage};
