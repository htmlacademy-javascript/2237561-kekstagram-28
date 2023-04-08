<<<<<<< HEAD
import {renderThumbnail} from './thumbnails.js';
import {getData} from './api.js';
import {showAlert} from './util.js';
import {setUserFormSubmit, onCloseForm} from './form.js';
=======
//import {getPhotoDescriptons} from './data.js';
import {renderThumbnail} from './thumbnails.js';
import {getData, sendData} from './api.js';
import {showAlert} from './util.js';
import {unblockSubmitButton, setUserFormSubmit, onCloseForm} from './form.js';
>>>>>>> 2367b0ef2cdb8f95525bc32a3f64fe30235d662a
import {renderFullSizePhoto} from './render-full-size-photo.js';
import {resetScale} from './scale.js';
import {resetEffects} from './effects.js';
import {showSuccessMessage, showErrorMessage} from './message.js';

<<<<<<< HEAD
setUserFormSubmit({
  onSuccess: () => {
    onCloseForm();
    showSuccessMessage();
  },
  onError: (err) => {
    showAlert(err.message);
    showErrorMessage();
=======
setUserFormSubmit(async (data) => {
  try {
    await sendData(data);
    onCloseForm();
    showSuccessMessage();
  } catch {
    showErrorMessage();
  } finally {
    unblockSubmitButton();
>>>>>>> 2367b0ef2cdb8f95525bc32a3f64fe30235d662a
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
