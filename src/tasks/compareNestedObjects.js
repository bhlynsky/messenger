let isEqual;
export default function compareNestedObjects(obj1, obj2) {
  isEqual = true;

  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false;

  for (let key of keys1) {
    let value1 = obj1[key];
    let value2 = obj2[key];

    console.log('curr value 1: ' + value1);
    console.log('curr value 2: ' + value2);

    if (Array.isArray(value1)) {
      compareArrays(value1, value2);
    } else if (typeof value1 !== 'object' || typeof value2 !== 'object') {
      if (value1 !== value2) {
        isEqual = false;
        break;
      }
    } else if (typeof value1 === 'object' || typeof value2 === 'object')
      compareNestedObjects(value1, value2); // recursion for nested objects
  }
  console.log(isEqual);
  return isEqual;
}

const compareArrays = (a, b) => {
  if (a.length === b.length) {
    a.sort();
    b.sort();

    a.forEach((el, i) => {
      if (el !== b[i]) {
        isEqual = false;
        return;
      }
    });
  } else {
    isEqual = false;
    return;
  }
};
