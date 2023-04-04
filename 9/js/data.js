import {getRandomArrayElement} from './util.js';
import {createRandomIdFromRangeGenerator} from './util.js';
import {getRandomInteger} from './util.js';

const NAMES = ['Иван', 'Artur', 'Марина', 'Ольга', 'David', 'Дарт Мяудер'];
const COMMENTS = ['В целом всё неплохо. Но не всё.','Всё отлично!', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];
const COMMENTS_MIN = 1;
const COMMENTS_MAX = 10;
const DESCRIPTIONS = ['joke of the day', 'morning walks, talks and flying', 'Happens all the time', 'Cozy rainy day'];
const AVATAR_MAX = 6;
const URL_MIN = 1;
const URL_MAX = 25;
const PHOTOS_ID = 25;

const generatePhotoId = createRandomIdFromRangeGenerator(1, 25);
const generateUrlId = createRandomIdFromRangeGenerator(1, 25);
const generateCommentId = createRandomIdFromRangeGenerator(1, 500);

const createComment = () => ({
  id: generateCommentId(0, 500),
  avatar: `img/avatar-${getRandomInteger(1, AVATAR_MAX)}.svg`,
  alt: 'Аватар комментатора',
  message: getRandomArrayElement(COMMENTS),
  name: getRandomArrayElement(NAMES)

});
const getComments = () => Array.from({length: getRandomInteger(COMMENTS_MIN, COMMENTS_MAX)}, createComment);

const createPhotoDescriptons = () => ({
  id: generatePhotoId(1, 25),
  url: `photos/${generateUrlId(URL_MIN, URL_MAX)}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(15,200),
  comments: getComments()
});

const getPhotoDescriptons = () => Array.from({length: PHOTOS_ID}, createPhotoDescriptons);

export {getPhotoDescriptons, getComments};
