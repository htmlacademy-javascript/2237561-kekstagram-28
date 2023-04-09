const FILE_TYPES = ['jpeg', 'jpg', 'svg', 'png', 'gif'];
const DEFAULT_PHOTO_ADDRESS = 'img/upload-default-image.jpg';

const uploadForm = document.querySelector('.img-upload__form');
const previewPicture = uploadForm.querySelector('.img-upload__preview img');
const effectsPreview = document.querySelectorAll('.effects__preview');

const setUserUploadPhoto = (field) => {
  const photo = field.files[0];
  const photoName = photo.name.toLowerCase();

  const matches = FILE_TYPES.some((it) => photoName.endsWith(it));
  if (matches) {
    previewPicture.src = URL.createObjectURL(photo);
    effectsPreview.forEach((picture) => {
      picture.style.backgroundImage = `url(${URL.createObjectURL(photo)})`;
      picture.style.backgroundSize = 'cover';
    });
  }
};

const resetPhotoFields = () => {
  previewPicture.src = DEFAULT_PHOTO_ADDRESS;
  effectsPreview.forEach((picture) => {
    picture.style.backgroundImage = DEFAULT_PHOTO_ADDRESS;
    picture.style.backgroundSize = 'cover';
  });
};

export { resetPhotoFields, setUserUploadPhoto };
