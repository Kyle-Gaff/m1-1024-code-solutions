/* exported getFullNameOfPerson */
interface person {
  firstName: string;
  lastName: string;
}

function getFullNameOfPerson(person: person): string {
  const fullName: string = person.firstName + ' ' + person.lastName;
  return fullName;
}
