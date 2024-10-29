'use strict';
// create array literal containing the strings red white and blue
// name it colors
const colors = ['red', 'white', 'blue'];
const firstColor = colors[0];
let secondColor = colors[1];
const thirdColor = colors[2];
console.log('value of colors[0]' + colors[0]);
console.log('value of colors[1]' + colors[1]);
console.log('value of colors[2]' + colors[2]);
const murica = `America is ${firstColor}, ${secondColor}, and ${thirdColor}.`;
console.log(murica);
colors[1] = 'green';
secondColor = colors[1];
const mexico = `Mexico is ${firstColor}, ${secondColor}, and ${thirdColor}.`;
console.log(mexico);
console.log(colors);
console.log('typeof colors: ' + typeof colors);
const students = ['CharLee', ' Evan', ' Lucy', ' Kai'];
const numberOfStudents = students.length;
const lastIndex = students[students.length - 1];
console.log('There are ' + numberOfStudents + ' students in the class');
console.log('The last student in the class is ' + lastIndex);
console.log('value of students ' + students);
console.log('typeof students: ' + typeof students);
