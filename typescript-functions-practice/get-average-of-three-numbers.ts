/* exported getAverageOfThreeNumbers */

function getAverageOfThreeNumbers(x: number, y: number, z: number): number {
  const aveThree: number = (x + y + z) / 3;
  return aveThree;
}
const getAverageOfThreeNumbersResult: number = getAverageOfThreeNumbers(
  2,
  4,
  6
);
console.log(`Function result ${getAverageOfThreeNumbersResult}`);
