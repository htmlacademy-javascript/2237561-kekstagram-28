//функция для определения длины строки
const chekStringLength = (string, maxLength) => {
  if (string.length >= maxLength){
    return false;
  }
  return true;
};

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

//функция возвращения символа
const isAddition = (string, minLength, pad) => {
  let result = string;
  while (result.length < minLength){
    const newResultLength = result.length + pad.length;
    const actualPad = newResultLength <= minLength ? pad : pad.slice(0, minLength - newResultLength);
    result = actualPad + result;
  }
  return result;
};
