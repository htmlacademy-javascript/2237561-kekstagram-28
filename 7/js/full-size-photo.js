
import './thumbnails.js';
import {isEscapeKey} from './util.js';


const fullSizePhoto = document.querySelector('.big-picture');
const fullSizeClosePhoto = document.querySelector('.big-picture__cancel');
const scrollThumbnail = document.querySelector('body');
const commentsCount = fullSizePhoto.querySelector('.social__comment-count');
const commentsLoader = fullSizePhoto.querySelector('.social__comments-loader');
const socialComments = fullSizePhoto.querySelector('.social__comments');

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeFullSizePhoto();
  }
};

const renderPhotoDetails = ({url, likes, description}) => {
  fullSizePhoto.querySelector('.big-picture__img img').src = url;
  fullSizePhoto.querySelector('.likes-count').textContent = likes;
  fullSizePhoto.querySelector('.social__caption').textContent = description;
};

const createElement = (tagName, className, text) => {
  const element = document.createElement(tagName);
  element.classList.add(className);
  if (text) {
    element.textContent = text;
  }
  return element;
};

const createCommentsList = (comments, commentsContainer) => {
  comments.forEach((item) => {
    const commentList = createElement('li','social__comment');
    const commentsAvatar = createElement('img','social__picture');
    const commentsText = createElement('p','social__text', item.message);
    commentsAvatar.src = item.avatar;
    commentsAvatar.alt = item.alt;

    commentList.appendChild(commentsAvatar);
    commentList.appendChild(commentsText);
    commentsContainer.appendChild(commentList);
  });
};

const onClickThumbnail = (someThumbnails) => {
  fullSizePhoto.classList.remove('hidden');
  commentsCount.classList.add('hidden');
  commentsLoader.classList.add('hidden');

  renderPhotoDetails(someThumbnails);
  socialComments.innerHTML = '';

  document.addEventListener('keydown', onDocumentKeydown);
  scrollThumbnail.classList.add('modal-open');
};

function closeFullSizePhoto () {
  fullSizePhoto.classList.add('hidden');
  document.removeEventListener('keydown', onDocumentKeydown);
  scrollThumbnail.classList.remove('modal-open');
}

fullSizeClosePhoto.addEventListener('click', () => {
  closeFullSizePhoto();
});

export {onClickThumbnail, createCommentsList};
