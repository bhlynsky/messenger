import React from 'react';
import { useState } from 'react';
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
      lastName: 'Doe',
      age: 50,
      eyeColor: 'blue',
    },
  };
  const randomObj = {
    name: 'Boris',
    surname: 'Hlynsky',
    position: 'Junior Developer',
    interests: { pets: ['cat', 'dog'], hobbies: ['guitar', 'video games'] },
  };
  const randomObj2 = {
    name: 'Boris',
    surname: 'Hlynsky',
    position: 'Junior Developer',
    interests: { pets: ['cat', 'dog'], hobbies: ['guitar', 'video games'] },
  };

  return (
    <div>
      <h1>Compare nested objects</h1>
      {compareNestedObjects(car, carCopy) ? <h3>Identical objects</h3> : <h3>Different objects</h3>}

      {compareNestedObjects(car, otherCar) ? (
        <h3>Identical objects</h3>
      ) : (
        <h3>Different objects</h3>
      )}

      {compareNestedObjects(carCopy, otherCar) ? (
        <h3>Identical objects</h3>
      ) : (
        <h3>Different objects</h3>
      )}
      {compareNestedObjects(randomObj, otherCar) ? (
        <h3>Identical objects</h3>
      ) : (
        <h3>Different objects</h3>
      )}
      {compareNestedObjects(randomObj, randomObj2) ? (
        <h3>Identical objects</h3>
      ) : (
        <h3>Different objects</h3>
      )}
    </div>
  );
}
