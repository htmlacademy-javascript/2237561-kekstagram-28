import {renderThumbnail} from './thumbnails.js';
import {getData} from './api.js';
import {showAlert} from './util.js';
import {setUserFormSubmit, onCloseForm} from './form.js';
import {renderFullSizePhoto} from './render-full-size-photo.js';
import {resetScale} from './scale.js';
import {resetEffects} from './effects.js';
import {showSuccessMessage, showErrorMessage} from './message.js';

setUserFormSubmit({
  onSuccess: () => {
    onCloseForm();
    showSuccessMessage();
  },
  onError: (err) => {
    showAlert(err.message);
    showErrorMessage();
  }
});
try {
  const data = await getData();
  renderFullSizePhoto(data);
  renderThumbnail(data);
} catch (err){
  showAlert(err.massage);
}
resetScale();
resetEffects();
