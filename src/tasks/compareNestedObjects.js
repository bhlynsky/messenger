export default function compareNestedObjects(obj1, obj2) {
  console.log(obj1);
  console.log(obj2);

  return JSON.stringify(obj1) === JSON.stringify(obj2);
}
