import {getPhotoDescriptons} from './data.js';

const containerPictures = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const someThumbnails = getPhotoDescriptons();

const thumbnailsFragment = document.createDocumentFragment();

someThumbnails.forEach(({url, likes, comments}) => {
  const thumbnail = pictureTemplate.cloneNode(true);

  thumbnail.querySelector('.picture__img').src = url;
  thumbnail.querySelector('.picture__likes').textContent = likes;
  thumbnail.querySelector('.picture__comments').textContent = comments.length;
  containerPictures.appendChild(thumbnail);
  thumbnailsFragment.appendChild(thumbnail);
});
containerPictures.appendChild(thumbnailsFragment);
