'use strict';
/* exported getAreaOfCircle */
function getAreaOfCircle(radius) {
  const areaV2 = Math.PI * Math.pow(radius, 2);
  return areaV2;
}
const getAreaOfCircleResult = getAreaOfCircle(78);
console.log(`function result ${getAreaOfCircleResult}`);
