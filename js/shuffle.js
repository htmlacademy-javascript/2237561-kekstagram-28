import { renderThumbnail } from './thumbnails.js';
import { debounce, createRandomIdFromRangeGenerator } from './util.js';

const IMG_AMOUNT = 10;
const TIME_OF_DELAY = 500;

const filtersContainer = document.querySelector('.img-filters');
const filterButtons = filtersContainer.querySelectorAll('.img-filters__button');
const filterDefaultButton = filtersContainer.querySelector('#filter-default');
const filterRandomButton = filtersContainer.querySelector('#filter-random');
const filterDiscussedButton = filtersContainer.querySelector('#filter-discussed');

const resetThumbnails = () => {
  const pictures = document.querySelectorAll('.pictures .picture');
  pictures.forEach((picture) => picture.remove());
};

const showFilters = () => filtersContainer.classList.remove('img-filters--inactive');

const setFilterRandom = (pictures) => createRandomIdFromRangeGenerator(pictures, IMG_AMOUNT);

const setFilterDiscussed = (pictures) => pictures.slice().sort((pictureA, pictureB) => pictureB.comments.length - pictureA.comments.length);

const onFilterButtonsClick = (evt) => {
  if (evt.target.closest('.img-filters__button')) {
    evt.target.classList.add('img-filters__button--active');
    filterButtons.forEach((button) => {
      if (evt.target !== button) {
        button.classList.remove('img-filters__button--active');
      }
    });
  }
};

const setFilterClick = (pictures) => {
  filtersContainer.addEventListener('click', debounce((evt) => {
    onFilterButtonsClick(evt);
    resetThumbnails();
    switch (evt.target) {
      case filterDefaultButton:
        renderThumbnail(pictures);
        break;
      case filterRandomButton:
        renderThumbnail(setFilterRandom(pictures));
        break;
      case filterDiscussedButton:
        renderThumbnail(setFilterDiscussed(pictures));
        break;
    }
  }, TIME_OF_DELAY));
};

export { showFilters, setFilterClick };
