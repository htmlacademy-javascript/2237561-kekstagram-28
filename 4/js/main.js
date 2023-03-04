
const NAMES = ['Иван', 'Artur', 'Марина', 'Ольга', 'David'];
const COMMENTS = ['Всё отлично!', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.'];
const DESCRIPTIONS = ['joke of the day', 'morning walks, talks and flying', 'Happens all the time', 'Cozy rainy day'];
const AVATAR_MAX = 6;
const URL_MAX = 25;
const PHOTOS_ID = 25;

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];


const createPhotoDescriptons = () => ({
  id: getRandomInteger(1,25),
  url: `photos/${getRandomInteger(0, URL_MAX)}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(15,200),
  comments: {
    id: getRandomInteger (0, 500),
    avatar: `img/avatar-${getRandomInteger(0, AVATAR_MAX)}.svg`,
    message: getRandomArrayElement(COMMENTS),
    name: getRandomArrayElement(NAMES)
  }
});

const PhotoDescriptons = Array.from({length: PHOTOS_ID}, createPhotoDescriptons);

