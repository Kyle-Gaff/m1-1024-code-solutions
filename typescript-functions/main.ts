function convertMinutesToSeconds(x: number): number {
  const seconds: number = x * 60;
  return seconds;
}

const convertMinutesToSecondsResult: number = convertMinutesToSeconds(5);
console.log(` five minutes is ${convertMinutesToSecondsResult} seconds`);

function greet(x: string): string {
  const greeting: string = 'Hello,' + ' ' + x;
  return greeting;
}

const greetResult: string = greet('CharLee-Kyle');
console.log(greetResult);

const getArea = (width: number, height: number): number => {
  const area: number = width * height;
  return area;
};

const getAreaResult: number = getArea(8, 7);
console.log(`The Area is: ${getAreaResult}`);

interface person {
  firstName: string;
  lastName: string;
}
const person: person = {
  firstName: 'CharLee-Kyle',
  lastName: 'Gaff',
};

const getFirstName = (person: person): string => {
  const firstName: string = person.firstName;
  return firstName;
};

const getFirstNameResult: string = getFirstName(person);
console.log(`The first name is ${getFirstNameResult}`);

const arr: string[] = ['lions', ' tigers', ' bears'];

const getLastElement = (arr: string[]): string => {
  const lastArr: string = arr[arr.length - 1];
  return lastArr;
};

const getLastElementResult: string = getLastElement(arr);
console.log(`the last element is ${getLastElementResult}`);

function callOtherFunction(otherFunction: Function, params: unknown): any {
  return otherFunction(params);
}

const callOtherFunctionResult: any = callOtherFunction(
  convertMinutesToSeconds,
  8
);
console.log(`Did this work?: ${callOtherFunctionResult}`);
