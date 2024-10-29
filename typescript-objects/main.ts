interface StudentProps {
  firstName: string;
  lastName: string;
  age: number;
  livesInIrvine?: boolean;
  previousOccupation?: string;
}
const student: StudentProps = {
  firstName: 'CharLee-Kyle',
  lastName: 'Gaff',
  age: 18,
};

interface vehicle {
  make: string;
  model: string;
  year: number;
  color?: string;
  isConvertible?: boolean;
}

const car: vehicle = {
  make: 'Nio',
  model: 'SUV',
  year: 2021,
};

interface pet {
  name?: string;
  kind?: string;
}

const myPet: pet = {
  name: 'Tori',
  kind: 'Cat',
};

// student section

const firstName: string = student.firstName;
const lastName: string = student.lastName;
const fullName: string = firstName + ' ' + lastName;
console.log('fullName value: ' + fullName);

student.livesInIrvine = false;
const livesInIrvine: boolean = student.livesInIrvine;
console.log('lives in Irvine?: ' + livesInIrvine);
student.previousOccupation = 'Carpet Cleaner';
const previousOccupation: string = student.previousOccupation;
console.log('previous occupation: ' + previousOccupation);
console.log(student);
console.log('type of student: ' + typeof student);

// car section

car['color'] = 'blue';
car['isConvertible'] = false;

const color: string = car['color'];
console.log('car color is: ' + color);
const isConvertible: boolean = car['isConvertible'];
console.log('is convertible?: ' + isConvertible);
console.log(car);
console.log(typeof car);

// pet section
delete myPet.name;
delete myPet['kind'];
console.log(myPet);
console.log('typeof myPet: ' + typeof myPet);
