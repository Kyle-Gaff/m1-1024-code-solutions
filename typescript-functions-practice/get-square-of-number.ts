/* exported getSquareOfNumber */

function getSquareOfNumber(number: number): number {
  return Math.pow(number, 2);
}
const getSquareOfNumberResult: number = getSquareOfNumber(4);
console.log(`function result ${getSquareOfNumberResult}`);
