import {renderThumbnail} from './thumbnails.js';
import {onClickThumbnail, createCommentsList} from './full-size-photo.js';

const containerPictures = document.querySelector('.pictures');
const fullSizePhoto = document.querySelector('.big-picture');
const socialComments = fullSizePhoto.querySelector('.social__comments');

const renderFullSizePhoto = (pictures) => {
  containerPictures.addEventListener('click', (evt) => {
    const thumbnail = evt.target.closest('[data-thumbnail-index]');
    if(!thumbnail){
      return;
    }
    const photoItem = pictures.find((item)=> item.id === +thumbnail.dataset.thumbnailIndex);
    onClickThumbnail(photoItem);
    createCommentsList(photoItem.comments, socialComments);
  });
  renderThumbnail(pictures, containerPictures);
};
export {renderFullSizePhoto};
