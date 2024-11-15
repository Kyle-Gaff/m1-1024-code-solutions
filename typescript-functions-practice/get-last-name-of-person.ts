/* exported getLastNameOfPerson */
interface person {
  firstName: string;
  lastName: string;
}

function getLastNameOfPerson(person: person): string {
  return person.lastName;
}
