import './data.js';

const containerPictures = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const thumbnailsFragment = document.createDocumentFragment();


const renderThumbnail = (someThumbnails) => {
  someThumbnails.forEach(({url, description, likes, comments, id}) => {
    const thumbnail = pictureTemplate.cloneNode(true);
    thumbnail.querySelector('.picture__img').src = url;
    thumbnail.querySelector('.picture__img').alt = description;
    thumbnail.querySelector('.picture__likes').textContent = likes;
    thumbnail.querySelector('.picture__comments').textContent = comments.length;
    thumbnailsFragment.appendChild(thumbnail);
    thumbnail.dataset.thumbnailIndex = id;
  });
  return containerPictures.appendChild(thumbnailsFragment);
};

export {renderThumbnail};
