const HASHTAG_MAX_AMOUNT = 5;
const HASHTAG_ERROR_TEXT = 'Неверно заполнены хэштэги';
const VALYD_SYMBOLS = /^#[a-za-яё0-9]{1,19}$/i;
const form = document.querySelector('.img-upload__form');
const hashtagField = form.querySelector('.text__hashtags');

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper__error'
});

const isValidTag = (tag) => VALYD_SYMBOLS.test(tag);
const isValidCount = (tags) => tags.length <= HASHTAG_MAX_AMOUNT;
const isUniqueTags = (tags) => {
  const lowerCaseTags = tags.map((tag) => tag.toLowerCase());
  return lowerCaseTags.length === new Set(lowerCaseTags).size;
};

const isValidateTags = (value) => {
  const tags = value
    .trim()
    .split(' ')
    .filter((tag) => tag.trim().length);
  return isValidCount(tags) && isUniqueTags(tags) && tags.every(isValidTag);
};

pristine.addValidator(
  hashtagField,
  isValidateTags,
  HASHTAG_ERROR_TEXT
);

export {pristine};
