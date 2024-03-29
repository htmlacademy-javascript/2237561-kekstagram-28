import {renderThumbnail} from './thumbnails.js';
import {getData} from './api.js';
import {showAlert} from './util.js';
import {setUserFormSubmit, onUploadCancelButtonClick} from './form.js';
import {renderFullSizePhoto} from './render-full-size-photo.js';
import {resetScale} from './scale.js';
import {resetEffects} from './effects.js';
import {showSuccessMessage, showErrorMessage} from './message.js';
import {showFilters, setFilterClick} from './shuffle.js';
import './upload-photo.js';

setUserFormSubmit({
  onSuccess: () => {
    onUploadCancelButtonClick();
    showSuccessMessage();
  },
  onError: (err) => {
    showAlert(err.message);
    showErrorMessage();
  }
});
try {
  const data = await getData();
  showFilters();
  renderFullSizePhoto(data);
  renderThumbnail(data);
  setFilterClick(data);
} catch (err){
  showAlert(err.massage);
}
resetScale();
resetEffects();
