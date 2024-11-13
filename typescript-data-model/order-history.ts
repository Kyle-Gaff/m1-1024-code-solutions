interface Order {
  orderNumber: string;
  numberOfItems: number;
  shippedTo: string;
  i1: string;
  author?: string;
  categoryI1: string;
  priceI1: string;
  i2?: string;
  authorI2?: string;
  categoryI2?: string;
  priceI2?: string;
  datePlaced: string;
  priceTotal: string;
  dateReceived: string;
  returnWindowOpen: boolean;
}

const orderHistory: Order[] = [
  {
    orderNumber: '113-2883177-2648248',
    numberOfItems: 2,
    shippedTo: 'JS Masher',
    i1: 'GameCube Controller - Super Smash Bros. Edition (Nintendo Switch)',
    categoryI1: 'Technology/Computers',
    priceI1: '$94.95',
    i2: 'The Art of Sql',
    authorI2: ' Stephane Faroult',
    categoryI2: 'Book',
    priceI2: '$33.99',
    datePlaced: 'July 3, 2020',
    priceTotal: '138.93',
    dateReceived: ' July 5, 2020',
    returnWindowOpen: false,
  },
  {
    orderNumber: '114-2875557-9059409',
    numberOfItems: 1,
    shippedTo: 'JS Masher',
    i1: 'GameCube Controller Adapter, Super Smash Bros Switch Gamecube Adapter for WII U, PC. Support Turbo and Vibration Features. No Driver and No Lag-Gamecube Adapter',
    categoryI1: 'Technology/Computers',
    priceI1: '$15.98',
    datePlaced: 'July 4, 2020',
    priceTotal: '$17.22',
    dateReceived: 'July 7, 2020',
    returnWindowOpen: false,
  },
  {
    orderNumber: '113-9984268-12802557',
    numberOfItems: 1,
    shippedTo: 'JS Masher',
    i1: 'The Timeless Way of Building',
    author: 'Christopher Alexander',
    categoryI1: 'Book',
    priceI1: '$41.35',
    datePlaced: 'July 19, 2020',
    priceTotal: '$44.53',
    dateReceived: 'July 20, 2020',
    returnWindowOpen: false,
  },
  {
    orderNumber: '',
    numberOfItems: 1,
    shippedTo: 'JS Masher',
    i1: '114-3941689-8772232',
    author: 'JavaScript for impatient programmers',
    categoryI1: 'Book',
    priceI1: '$31.55',
    datePlaced: 'August 4, 2020',
    priceTotal: '$34.00',
    dateReceived: 'August 8, 2020',
    returnWindowOpen: false,
  },
];
