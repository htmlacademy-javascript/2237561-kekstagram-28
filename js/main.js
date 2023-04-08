//import {getPhotoDescriptons} from './data.js';
import {renderThumbnail} from './thumbnails.js';
import {getData, sendData} from './api.js';
import {showAlert} from './util.js';
import {unblockSubmitButton, setUserFormSubmit, onCloseForm} from './form.js';
import {renderFullSizePhoto} from './render-full-size-photo.js';
import {resetScale} from './scale.js';
import {resetEffects} from './effects.js';
import {showSuccessMessage, showErrorMessage} from './message.js';

setUserFormSubmit(async (data) => {
  try {
    await sendData(data);
    onCloseForm();
    showSuccessMessage();
  } catch {
    showErrorMessage();
  } finally {
    unblockSubmitButton();
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
