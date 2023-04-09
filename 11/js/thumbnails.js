<<<<<<< HEAD
=======
//import './data.js';

>>>>>>> 2367b0ef2cdb8f95525bc32a3f64fe30235d662a
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