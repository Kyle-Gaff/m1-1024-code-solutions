/* exported getSumOfSquares */
function getSumOfSquares(x: number, y: number): number {
  const sum: number = Math.pow(x, 2) + Math.pow(y, 2);
  return sum;
}
const getSumOfSquaresResult: number = getSumOfSquares(4, 5);
console.log(` function result ${getSumOfSquaresResult}`);
