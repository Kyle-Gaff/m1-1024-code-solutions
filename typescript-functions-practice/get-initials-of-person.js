'use strict';
function getInitialsOfPerson(person) {
  const initialN = getCharacterAtIndex(person.firstName, 0);
  const initialL = getCharacterAtIndex(person.lastName, 0);
  const initials = initialN + initialL;
  return initials;
}
