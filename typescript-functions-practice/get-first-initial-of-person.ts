/* exported getFirstInitialOfPerson */
interface person {
  firstName: string;
  lastName: string;
}

function getFirstInitialOfPerson(person: person): string {
  return getCharacterAtIndex(person.firstName, 0);
}
