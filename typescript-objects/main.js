'use strict';
const student = {
  firstName: 'CharLee-Kyle',
  lastName: 'Gaff',
  age: 18,
};
const car = {
  make: 'Nio',
  model: 'SUV',
  year: 2021,
};
const myPet = {
  name: 'Tori',
  kind: 'Cat',
};
// student section
const firstName = student.firstName;
const lastName = student.lastName;
const fullName = firstName + ' ' + lastName;
console.log('fullName value: ' + fullName);
student.livesInIrvine = false;
const livesInIrvine = student.livesInIrvine;
console.log('lives in Irvine?: ' + livesInIrvine);
student.previousOccupation = 'Carpet Cleaner';
const previousOccupation = student.previousOccupation;
console.log('previous occupation: ' + previousOccupation);
console.log(student);
console.log('type of student: ' + typeof student);
// car section
car['color'] = 'blue';
car['isConvertible'] = false;
const color = car['color'];
console.log('car color is: ' + color);
const isConvertible = car['isConvertible'];
console.log('is convertible?: ' + isConvertible);
console.log(car);
console.log(typeof car);
// pet section
delete myPet.name;
delete myPet['kind'];
console.log(myPet);
console.log('typeof myPet: ' + typeof myPet);
