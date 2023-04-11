const SCALE_STEP = 25;
const SCALE_MIN = 25;
const SCALE_MAX = 100;
const SCALE_DEFAULT = 100;

const form = document.querySelector('.img-upload__form');
const scaleControlSmaller = form.querySelector('.scale__control--smaller');
const scaleControlBigger = form.querySelector('.scale__control--bigger');
const scaleControlValue = form.querySelector('.scale__control--value');
const imgPrewiew = form.querySelector('.img-upload__preview  img');

const scaleImg = (value) => {
  imgPrewiew.style.transform = `scale(${value / 100})`;
  scaleControlValue.value = `${value}%`;
};

const onSmallerButtonClick = () => {
  const currentValue = parseInt(scaleControlValue.value, 10);
  let newValue = currentValue - SCALE_STEP;
  if(newValue < SCALE_MIN){
    newValue = SCALE_MIN;
  }
  scaleImg(newValue);
};

const onBiggerButtonClick = () => {
  const currentValue = parseInt(scaleControlValue.value, 10);
  let newValue = currentValue + SCALE_STEP;
  if(newValue > SCALE_MAX){
    newValue = SCALE_MAX;
  }
  scaleImg(newValue);
};

const resetScale = () => scaleImg(SCALE_DEFAULT);

scaleControlSmaller.addEventListener('click', onSmallerButtonClick);
scaleControlBigger.addEventListener('click', onBiggerButtonClick);

export {resetScale};
