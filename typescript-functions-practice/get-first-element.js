'use strict';
/* exported getFirstElement */
function getFirstElement(array) {
  const firstIndex = array[0];
  return firstIndex;
}
const thing = ['foo', 'bar', 'baz'];
const getFirstElementResult = getFirstElement(thing);
console.log(`function result ${getFirstElementResult}`);
