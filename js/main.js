import {getPhotoDescriptons} from './data.js';
import {renderThumbnail} from './thumbnails.js';
import {renderFullSizePhoto} from './render-full-size-photo.js';
import './form.js';
import {resetScale} from './scale.js';

const photoDescriptions = getPhotoDescriptons();
renderThumbnail(photoDescriptions);
renderFullSizePhoto(photoDescriptions);
resetScale();
