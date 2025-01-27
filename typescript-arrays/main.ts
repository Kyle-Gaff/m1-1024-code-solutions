// create array literal containing the strings red white and blue
// name it colors
const colors: string[] = ['red', 'white', 'blue'];
const firstColor: string = colors[0];
let secondColor: string = colors[1];
const thirdColor: string = colors[2];

console.log('value of colors[0]' + colors[0]);
console.log('value of colors[1]' + colors[1]);
console.log('value of colors[2]' + colors[2]);

const murica: string = `America is ${firstColor}, ${secondColor}, and ${thirdColor}.`;
console.log(murica);

colors[1] = 'green';
secondColor = colors[1];
const mexico: string = `Mexico is ${firstColor}, ${secondColor}, and ${thirdColor}.`;
console.log(mexico);
console.log(colors);
console.log('typeof colors: ' + typeof colors);

const students: string[] = ['CharLee', ' Evan', ' Lucy', ' Kai'];
const numberOfStudents: number = students.length;
const lastIndex: string = students[students.length - 1];
console.log('There are ' + numberOfStudents + ' students in the class');
console.log('The last student in the class is ' + lastIndex);
console.log('value of students ' + students);
console.log('typeof students: ' + typeof students);
