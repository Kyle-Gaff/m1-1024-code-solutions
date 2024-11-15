/* exported getDescriptionOfPerson */
interface person {
  name: string;
  occupation: string;
  birthPlace: string;
}

function getDescriptionOfPerson(person: person): string {
  const disc: string = `${person.name} is a ${person.occupation} from ${person.birthPlace}.`;
  return disc;
}
