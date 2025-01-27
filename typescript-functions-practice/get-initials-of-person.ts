/* exported getInitialsOfPerson */
interface person {
  firstName: string;
  lastName: string;
}

function getInitialsOfPerson(person: person): string {
  const initialN: string = getCharacterAtIndex(person.firstName, 0);
  const initialL: string = getCharacterAtIndex(person.lastName, 0);
  const initials: string = initialN + initialL;
  return initials;
}
