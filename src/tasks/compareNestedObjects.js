export default function compareNestedObjects(obj1, obj2) {
  let isEqual = true;

  let keys1 = Object.keys(obj1);
  let keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false;

  for (let key of keys1) {
    let value1 = obj1[key];
    let value2 = obj2[key];

    console.log(key + 'curr value 1: ' + value1);
    console.log(key + 'curr value 2: ' + value2);

    if (Array.isArray(value1)) {
      isEqual = compareArrays(value1, value2);
    } else if (typeof value1 !== 'object' && typeof value2 !== 'object') {
      if (value1 !== value2) {
        isEqual = false;
        break;
      }
    } else if (typeof value1 === 'object' || typeof value2 === 'object')
      isEqual = compareNestedObjects(value1, value2); // recursion for nested objects
  }

  return isEqual;
}

const compareArrays = (a, b) => {
  if (a.length === b.length) {
    return JSON.stringify(a) === JSON.stringify(b);
  } else {
    return false;
  }
};
