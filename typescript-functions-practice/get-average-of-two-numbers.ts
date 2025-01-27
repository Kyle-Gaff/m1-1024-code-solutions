/* exported getAverageOfTwoNumbers */
function getAverageOfTwoNumbers(x: number, y: number): number {
  const average: number = (x + y) / 2;
  return average;
}

const getAverageOfTwoNumbersResult: number = getAverageOfTwoNumbers(8, 9);
console.log(`Function result ${getAverageOfTwoNumbersResult}`);
