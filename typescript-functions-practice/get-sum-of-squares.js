'use strict';
/* exported getSumOfSquares */
function getSumOfSquares(x, y) {
  const sum = Math.pow(x, 2) + Math.pow(y, 2);
  return sum;
}
const getSumOfSquaresResult = getSumOfSquares(4, 5);
console.log(` function result ${getSumOfSquaresResult}`);
