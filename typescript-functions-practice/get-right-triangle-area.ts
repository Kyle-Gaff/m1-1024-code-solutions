/* exported getRightTriangleArea */
function getRightTriangleArea(base: number, height: number): number {
  const area: number = (base * height) / 2;
  return area;
}

const getRightTriangleAreaResult: number = getRightTriangleArea(3, 4);
console.log(`function result ${getRightTriangleAreaResult}`);
