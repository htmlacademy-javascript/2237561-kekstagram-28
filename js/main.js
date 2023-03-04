
const NAMES = ['Иван', 'Artur', 'Марина', 'Ольга', 'David', 'Дарт Мяудер'];
const COMMENTS = ['В целом всё неплохо. Но не всё.','Всё отлично!', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'];
const COMMENTS_MAX = 10;
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

function createRandomIdFromRangeGenerator (min, max) {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      console.error('Перебраны все числа из диапазона от ' + min + ' до ' + max);
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

const generatePhotoId = createRandomIdFromRangeGenerator(1, 25);
const generateUrlId = createRandomIdFromRangeGenerator(1, 25);
const generateCommentId = createRandomIdFromRangeGenerator(1, 500);

const createComment = () => ({
  id: generateCommentId(0, 500),
  avatar: `img/avatar-${getRandomInteger(1, AVATAR_MAX)}.svg`,
  message: getRandomArrayElement(COMMENTS),
  name: getRandomArrayElement(NAMES)

});

const createPhotoDescriptons = () => ({
  id: generatePhotoId(1, 25),
  url: `photos/${generateUrlId(1, URL_MAX)}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(15,200),
  comments: Array.from({length: getRandomInteger(0, COMMENTS_MAX)}, createComment)
});

const PhotoDescriptons = Array.from({length: PHOTOS_ID}, createPhotoDescriptons);
PhotoDescriptons(); //чтобы eslint не ругался на консоль
