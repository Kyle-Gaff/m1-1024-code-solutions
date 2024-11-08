/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro,
            recommendMovie
 */
function isUnderFive(number: number): boolean {
  if (number < 5) {
    return true;
  } else {
    return false;
  }
}

function isEven(number: number): boolean {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

function startsWithJ(string: string): boolean {
  if (string.startsWith('J') === true) {
    return true;
  } else {
    return false;
  }
}

interface Person {
  name: string;
  age: number;
}

function isOldEnoughToDrink(person: Person): boolean {
  if (person.age >= 21) {
    return true;
  } else {
    return false;
  }
}

function isOldEnoughToDrive(person: Person): boolean {
  if (person.age >= 16) {
    return true;
  } else {
    return false;
  }
}

function isOldEnoughToDrinkAndDrive(): boolean {
  return false;
}

function categorizeAcidity(pH: number): string {
  if (pH === 7) {
    return 'neutral';
  } else if (pH <= 14 && pH > 7) {
    return 'base';
  } else if (pH < 7 && pH > 0) {
    return 'acid';
  } else {
    return 'invalid pH level';
  }
}

function introduceWarnerBro(name: string): string {
  switch (name) {
    case 'yakko':
      return "We're the warner brothers!";

    case 'wakko':
      return "We're the warner brothers!";

    case 'dot':
      return "I'm cute~";

    default:
      return 'Goodnight everybody!';
  }
}

function recommendMovie(genre: string): string {
  switch (genre) {
    case 'action':
      return 'Die Hard';

    case 'comedy':
      return 'The Naked Gun';

    case 'horror':
      return 'scream';

    case 'drama':
      return 'The Substance';

    case 'musical':
      return 'High School Musical';

    case 'sci-fi':
      return 'Ready Player One';

    default:
      return 'Genre not recognized. Chose between action, comedy, horror, drama, musical, or sci-fi.';
  }
}
