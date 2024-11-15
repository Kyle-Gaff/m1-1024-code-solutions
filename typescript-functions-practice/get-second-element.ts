/* exported getSecondElement */
function getSecondElement(array: any[]): any {
  const firstIndex: any = array[1];
  return firstIndex;
}

const getSecondElementResult: any = getSecondElement(thing);
console.log(`function result ${getSecondElementResult}`);
