'use strict';
/* exported getRightTriangleArea */
function getRightTriangleArea(base, height) {
  const area = (base * height) / 2;
  return area;
}
const getRightTriangleAreaResult = getRightTriangleArea(3, 4);
console.log(`function result ${getRightTriangleAreaResult}`);
