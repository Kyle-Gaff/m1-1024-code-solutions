/* exported getFirstElement */
function getFirstElement(array: any[]): any {
  const firstIndex: any = array[0];
  return firstIndex;
}

const thing: string[] = ['foo', 'bar', 'baz'];
const getFirstElementResult: any = getFirstElement(thing);
console.log(`function result ${getFirstElementResult}`);
