'use strict';
/* exported getAverageOfThreeNumbers */
function getAverageOfThreeNumbers(x, y, z) {
  const aveThree = (x + y + z) / 3;
  return aveThree;
}
const getAverageOfThreeNumbersResult = getAverageOfThreeNumbers(2, 4, 6);
console.log(`Function result ${getAverageOfThreeNumbersResult}`);
