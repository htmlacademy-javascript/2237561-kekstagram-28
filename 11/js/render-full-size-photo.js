import './thumbnails.js';
import {onClickThumbnail, createCommentsList, renderComments} from './full-size-photo.js';

const containerPictures = document.querySelector('.pictures');
const fullSizePhoto = document.querySelector('.big-picture');
const socialComments = fullSizePhoto.querySelector('.social__comments');
const commentsLoader = fullSizePhoto.querySelector('.social__comments-loader');

const renderFullSizePhoto = (pictures) => {
  containerPictures.addEventListener('click', (evt) => {
    const thumbnail = evt.target.closest('[data-thumbnail-index]');
    if(!thumbnail){
      return;
    }

    const photoItem = pictures.find((item)=> item.id === +thumbnail.dataset.thumbnailIndex);
    onClickThumbnail(photoItem);
    commentsLoader.classList.remove('hidden');
    createCommentsList(photoItem.comments, socialComments);
    renderComments();
  });
};
export {renderFullSizePhoto};
