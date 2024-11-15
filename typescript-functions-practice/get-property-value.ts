/* exported getPropertyValue */

function getPropertyValue(object: object, key: keyof object): string {
  return object[key];
}
