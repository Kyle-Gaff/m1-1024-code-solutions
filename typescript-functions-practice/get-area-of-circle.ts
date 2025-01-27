/* exported getAreaOfCircle */
function getAreaOfCircle(radius: number): number {
  const areaV2: number = Math.PI * Math.pow(radius, 2);
  return areaV2;
}

const getAreaOfCircleResult: number = getAreaOfCircle(78);
console.log(`function result ${getAreaOfCircleResult}`);
