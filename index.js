const map = (array, callbackFn) => {
  let newArr = [];

  array.forEach(element => newArr.push(callbackFn(element)));
  return newArr;
};

const reduce = (array, callbackFn, starting = 0) => {
  if (starting) {
    return array.reduce(callbackFn, starting);
  } else {
    return array.reduce(callbackFn);
  }
};
