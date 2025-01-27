'use strict';
function convertMinutesToSeconds(x) {
  const seconds = x * 60;
  return seconds;
}
const convertMinutesToSecondsResult = convertMinutesToSeconds(5);
console.log(` five minutes is ${convertMinutesToSecondsResult} seconds`);
function greet(x) {
  const greeting = 'Hello,' + ' ' + x;
  return greeting;
}
const greetResult = greet('CharLee-Kyle');
console.log(greetResult);
const getArea = (width, height) => {
  const area = width * height;
  return area;
};
const getAreaResult = getArea(8, 7);
console.log(`The Area is: ${getAreaResult}`);
const person = {
  firstName: 'CharLee-Kyle',
  lastName: 'Gaff',
};
const getFirstName = (person) => {
  const firstName = person.firstName;
  return firstName;
};
const getFirstNameResult = getFirstName(person);
console.log(`The first name is ${getFirstNameResult}`);
const arr = ['lions', ' tigers', ' bears'];
const getLastElement = (arr) => {
  const lastArr = arr[arr.length - 1];
  return lastArr;
};
const getLastElementResult = getLastElement(arr);
console.log(`the last element is ${getLastElementResult}`);
function callOtherFunction(otherFunction, params) {
  return otherFunction(params);
}
const callOtherFunctionResult = callOtherFunction(convertMinutesToSeconds, 8);
console.log(`Did this work?: ${callOtherFunctionResult}`);
