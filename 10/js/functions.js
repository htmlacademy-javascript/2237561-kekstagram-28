//функция для определения длины строки
const chekStringLength = (string, maxLength) => {
  if (string.length >= maxLength){
    return false;
  }
  return true;
};
chekStringLength('проверяемая строка', 20);

//проверка палиндрома
const checkPalindrome = (string) => {
  const newString = string
    .toLowerCase()
    .replaceAll(' ', '');
  let reverseString = '';
  for (let i = newString.length - 1; i >= 0; i --) {
    reverseString += newString.at(i);
  }
  return newString === reverseString;
};
checkPalindrome('Лёша на полке клопа нашёл ');

//функция, которая возвращает целое положительное число
const extractNumber = (string) => {
  let result = '';
  for(let i = 0; i < string.length; i++){
    if(!Number.isNaN(parseInt(string.at(i), 10))){
      result += string.at(i);
    }
  }
  return parseInt(result, 10);
};
extractNumber('агент 007');

//функция возвращения строки
const isAddition = (string, minLength, pad) => {
  let result = string;
  while (result.length < minLength){
    const newResultLength = result.length + pad.length;
    const actualPad = newResultLength <= minLength ? pad : pad.slice(0, minLength - newResultLength);
    result = actualPad + result;
  }
  return result;
};
isAddition('q', 4, 'werty');
