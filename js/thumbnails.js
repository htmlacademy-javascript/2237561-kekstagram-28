import {getPhotoDescriptons} from './data.js';

const container = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const someThumbnails = getPhotoDescriptons();

const thumbnailsFragment = document.createDocumentFragment();

someThumbnails.forEach(({url, likes, comments}) => {
  const thumbnail = pictureTemplate.cloneNode(true);

  thumbnail.querySelector('.picture__img').src = url;
  thumbnail.querySelector('.picture__likes').textContent = likes;
  thumbnail.querySelector('.picture__comments').textContent = comments.length;
  container.appendChild(thumbnail);
  thumbnailsFragment.appendChild(thumbnail);
});
container.appendChild(thumbnailsFragment);

export {container};
