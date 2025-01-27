'use strict';
// Math Object
const heroes = ['Venom', 'Iron Man', 'Batman', 'Green Lantern'];
let randomNumber = Math.random();
randomNumber = randomNumber * heroes.length;
const randomIndex = Math.floor(randomNumber);
console.log(`Value of randomIndex: ${randomIndex}`);
const randomHero = heroes[randomIndex];
console.log(`Value of randomHero: ${randomHero}`);
// Array Methods
const book1 = {
  title: 'One Piece',
  author: 'Oda',
};
const book2 = {
  title: 'Their Eyes Were Watching God',
  author: 'Zora Neale Hurston',
};
const book3 = {
  title: 'To Kill a MockingBird',
  author: 'Harper Lee',
};
const library = [book1, book2, book3];
const lastBook = library.pop();
console.log('The last book is:', lastBook);
const firstBook = library.shift();
console.log('The first book is', firstBook);
const js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer',
};
const css = {
  title: 'CSS Secrets',
  author: 'Lea Verou',
};
library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('Library:', library);
const fullName = 'CharLee-Kyle Gaff';
const firstAndLastName = fullName.split(' ');
console.log(`My name is: ${firstAndLastName}`);
const firstName = firstAndLastName[0];
const sayMyName = firstName.toUpperCase();
console.log('Say my name:', sayMyName);
const employee = {
  name: 'CharLee-Kyle',
  age: 18,
  position: 'Farm Hand',
};
const employeeKeys = Object.keys(employee);
console.log(`Value of employeeKeys ${employeeKeys}`);
const employeeValues = Object.values(employee);
console.log(`Value of employeeValues ${employeeValues}`);
const employeePairs = Object.entries(employee);
console.log(`Value of employeePairs ${employeePairs}`);
