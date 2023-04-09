const EFFECTS = [
  {
    name: 'none',
    style: 'none',
    min: 0,
    max: 100,
    step: 1,
    unit: ''
  },
  {
    name: 'chrome',
    style: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    unit: ''
  },
  {
    name: 'sepia',
    style: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    unit: ''
  },
  {
    name: 'marvin',
    style: 'invert',
    min: 0,
    max: 100,
    step: 1,
    unit: '%'
  },
  {
    name: 'phobos',
    style: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    unit: 'px'
  },
  {
    name: 'heat',
    style: 'brightness',
    min: 1,
    max: 3,
    step: 0.1,
    unit: ''
  },
];
const EFFECTS_ORIGINAL = EFFECTS[0];
let chosenEffect = EFFECTS_ORIGINAL;

const form = document.querySelector('.img-upload__form');
const imgPreview = form.querySelector('.img-upload__preview img');
const sliderElement = form.querySelector('.effect-level__slider');
const effectsElement = form.querySelector('.effects');
const sliderContainer = form.querySelector('.img-upload__effect-level');
const effectLevelValue = form.querySelector('.effect-level__value');

const isOriginalEffect = () => chosenEffect === EFFECTS_ORIGINAL;

const showSlider = () => {
  sliderContainer.classList.remove('hidden');
};

const hideSlider = () => {
  sliderContainer.classList.add('hidden');
};

const updateSlider = () => {
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: chosenEffect.min,
      max: chosenEffect.max,
    },
    start: chosenEffect.max,
    step: chosenEffect.step,
  });
  if (isOriginalEffect()){
    hideSlider();
  } else {
    showSlider();
  }
};

const onEffectsChanges = (evt) => {
  if(!evt.target.classList.contains('effects__radio')){
    return;
  }
  chosenEffect = EFFECTS.find((effect) => effect.name === evt.target.value);
  imgPreview.className = `effects__preview--${chosenEffect.name}`;
  updateSlider();
};

const onSliderUpdate = () =>{
  const sliderValue = sliderElement.noUiSlider.get();
  imgPreview.style.filter = isOriginalEffect() ? EFFECTS_ORIGINAL.style : `${chosenEffect.style}(${sliderValue}${chosenEffect.unit})`;
  effectLevelValue.value = sliderValue;
};

const resetEffects = () => {
  chosenEffect = EFFECTS_ORIGINAL;
  updateSlider();
};

noUiSlider.create(sliderElement, {
  range: {
    min: EFFECTS_ORIGINAL.min,
    max: EFFECTS_ORIGINAL.max,
  },
  start: EFFECTS_ORIGINAL.max,
  step: EFFECTS_ORIGINAL.step,
  connect: 'lower'
});
hideSlider();

effectsElement.addEventListener('change', onEffectsChanges);
sliderElement.noUiSlider.on('update', onSliderUpdate);

export {resetEffects};
