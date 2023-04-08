import {isEscapeKey} from './util.js';
import {onCloseForm, onDocumentKeydown} from './form.js';

const successMessageTemplate = document.querySelector('#success').content;
const errorMessageTemplate = document.querySelector('#error').content;

<<<<<<< HEAD
const closeErrorMessage = () => {
  document.querySelector('.error').remove();
  document.addEventListener('keydown', onDocumentKeydown);
  document.removeEventListener('keydown', closeErrorKeydown);
};
=======
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
>>>>>>> 2367b0ef2cdb8f95525bc32a3f64fe30235d662a

const onClickOutModal = (evt) => {
  if(evt.target.matches('.success')){
    document.querySelector('.success').remove();
    onCloseForm();
  }
  if(evt.target.matches('.error')){
<<<<<<< HEAD
    closeErrorMessage();
  }
};

function closeErrorKeydown (evt) {
  if (isEscapeKey(evt)) {
    closeErrorMessage();
  }
}
=======
    document.querySelector('.error').remove();
  }
};

const closeErrorMessage = () => {
  document.querySelector('.error').remove();
};
>>>>>>> 2367b0ef2cdb8f95525bc32a3f64fe30235d662a

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

<<<<<<< HEAD
function closeSuccessKeydown (evt) {
  if (isEscapeKey(evt)) {
    closeSuccessMessage();
    onCloseForm();
  }
}

=======
>>>>>>> 2367b0ef2cdb8f95525bc32a3f64fe30235d662a
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
