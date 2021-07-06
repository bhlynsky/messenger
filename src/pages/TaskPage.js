import React from 'react';
import compareNestedObjects from '../tasks/compareNestedObjects';

export default function TaskPage() {
  const car = {
    type: 'Fiat',
    model: '500',
    color: 'white',
    owner: {
      firstName: 'John',
      lastName: 'Doe',
      age: 50,
      eyeColor: 'blue',
    },
  };

  const carCopy = Object.assign(car);
  const otherCar = {
    type: 'Fiat',
    model: '500',
    color: 'white',
    owner: {
      firstName: 'James',
      lastName: 'damn',
      age: 533131,
      eyeColor: 'dwadawdwadawdawdwadawd',
    },
  };
  const randomObj = {
    name: 'Boris',
    surname: 'Hlynsky',
    position: 'Junior Developer',
    interests: { pets: ['cat', 'dog'], hobbies: ['guitar', 'video games'] },
  };

  const randomObj3 = {
    name: 'Boris',
    interests: { pets: ['cat', 'dog'], hobbies: ['guitar', 'video games'] },
    surname: 'Hlynsky',
    position: 'Junior Developer',
  };

  return (
    <div>
      <h1>Compare nested objects</h1>

      <h2>Identical Objects test</h2>
      {compareNestedObjects(car, carCopy) ? <h3>Passed</h3> : <h3>Failed</h3>}
      <h2>Different Objects test</h2>

      {compareNestedObjects(car, otherCar) ? <h3>Failed</h3> : <h3> Passed</h3>}
      <h2>Completely different objects</h2>

      {compareNestedObjects(randomObj, otherCar) ? <h3>Failed</h3> : <h3>Passed</h3>}
      <h2>Identical Objects with nested arrays and random key order</h2>

      {compareNestedObjects(randomObj, randomObj3) ? <h3>Passed</h3> : <h3>Failed</h3>}
    </div>
  );
}
