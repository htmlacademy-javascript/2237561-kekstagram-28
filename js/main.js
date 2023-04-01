import {getPhotoDescriptons} from './data.js';
import {renderThumbnail} from './thumbnails.js';
import {renderFullSizePhoto} from './render-full-size-photo.js';

const photoDescriptions = getPhotoDescriptons();
renderThumbnail(photoDescriptions);
renderFullSizePhoto(photoDescriptions);
