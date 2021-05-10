const books = [
  {
    title: 'Chaos of Disciplines',
    subtitle: '',
    authors: ['Andrew Abbott'],
    year: 2001,
    month: 2,
    isbn13: '978-0226001012',
    image: 'https://images-na.ssl-images-amazon.com/images/I/51FYOr6-voL._SX323_BO1,204,203,200_.jpg',
    url: {
      publisher: 'https://press.uchicago.edu/ucp/books/book/chicago/C/bo3641851.html',
      amazon: 'https://www.amazon.com/dp/0226001016',
    },
    wordcount: 62000,
    tags: ['sociology', 'social sciences']
  },
  {
    title: 'Reyita',
    subtitle: 'The Life of a Black Cuban Woman in the Twentieth Century',
    authors: ['María de los Reyes Castillo Bueno', 'Daisy Rubiera Castillo', 'Anne McLean'],
    year: 2000,
    month: 11,
    isbn13: '978-0822325932',
    image: 'https://images-na.ssl-images-amazon.com/images/I/512SNPDXMHL._SX320_BO1,204,203,200_.jpg',
    url: {
      publisher: 'https://www.dukeupress.edu/reyita',
      amazon: 'https://www.amazon.com/dp/0822325934',
    },
    wordcount: 48000,
    tags: ['latin american history', 'history of cuba', 'historical latin american biographies']
  },
  {
    title: 'Fearing the Black Body',
    subtitle: 'The Racial Origins of Fat Phobia',
    authors: ['Sabrina Strings'],
    year: 2019,
    month: 5,
    isbn13: '978-1479886753',
    image: 'https://images-na.ssl-images-amazon.com/images/I/51kAu+goXLL._SX331_BO1,204,203,200_.jpg',
    url: {
      publisher: 'https://nyupress.org/9781479886753/fearing-the-black-body/',
      amazon: 'https://www.amazon.com/dp/1479886750',
    },
    wordcount: 76000,
    tags: ['sociological study of medicine', 'ethnic demographic studies', 'discrimination & racism']
  },
  {
    title: 'The Trouble with Testosterone',
    subtitle: 'And Other Essays on the Biology of the Human Predicament',
    authors: ['Robert Sapolsky'],
    year: 1998,
    month: 4,
    isbn13: '978-0684838915',
    image: 'https://images-na.ssl-images-amazon.com/images/I/41tL2psyniL._SX325_BO1,204,203,200_.jpg',
    url: {
      publisher: 'https://www.simonandschuster.com/books/The-Trouble-With-Testosterone/Robert-M-Sapolsky/9780684838915',
      amazon: 'https://www.amazon.com/dp/0684838915',
    },
    wordcount: 72000,
    tags: ['science essays & commentary', 'anatomy', 'essays']
  },
  {
    title: 'Dark Emu',
    subtitle: 'Black Seeds: Agriculture or Accident?',
    authors: ['Bruce Pascoe'],
    year: 2018,
    month: 5,
    isbn13: '978-1947534087',
    image: 'https://images-na.ssl-images-amazon.com/images/I/514mhdNEEEL._SX319_BO1,204,203,200_.jpg',
    url: {
      publisher: 'https://www.magabala.com/products/dark-emu',
      amazon: 'https://www.amazon.com/dp/B01MZ83E4B',
      wikipedia: 'https://en.wikipedia.org/wiki/Dark_Emu_(book)'
    },
    wordcount: 48720,
    tags: ['australia & new zealand history', 'environmentalist & naturalist biographies', 'food science']
  },
  {
    title: 'Debt',
    subtitle: 'The First 5,000 Years',
    authors: ['David Graeber'],
    year: 2011,
    month: 7,
    isbn13: '978-1612191294',
    image: 'https://images-na.ssl-images-amazon.com/images/I/41Hh11WkivL._SX331_BO1,204,203,200_.jpg',
    url: {
      publisher: 'https://www.mhpbooks.com/books/debt/',
      amazon: 'https://www.amazon.com/dp/1612191290',
      wikipedia: 'https://en.wikipedia.org/wiki/Debt:_The_First_5000_Years'
    },
    wordcount: 154860,
    tags: ['credit ratings & repair', 'theory of economics', 'economic history']
  },
  {
    title: 'The Mushroom at the End of the World',
    subtitle: 'On the Possibility of Life in Capitalist Ruins',
    authors: ['Anna Lowenhaupt Tsing'],
    year: 2017,
    month: 9,
    isbn13: '978-0691178325',
    image: 'https://images-na.ssl-images-amazon.com/images/I/51H+mQBE3JL._SX329_BO1,204,203,200_.jpg',
    url: {
      publisher: 'https://press.princeton.edu/books/paperback/9780691178325/the-mushroom-at-the-end-of-the-world',
      amazon: 'https://www.amazon.com/dp/0691178321'
    },
    wordcount: 96570,
    tags: ['food science', 'environmentalist economics', 'cultural anthropology']
  },
  {
    title: 'The Master Algorithm',
    subtitle: 'How the Quest for the Ultimate Learning Machine Will Remake Our World',
    authors: ['Pedro Domingos'],
    year: 2015,
    month: 9,
    isbn13: '978-0465094271',
    image: 'https://images-na.ssl-images-amazon.com/images/I/51hx36lKe6L._SX331_BO1,204,203,200_.jpg',
    url: {
      publisher: 'https://www.basicbooks.com/titles/pedro-domingos/the-master-algorithm/9780465061921/',
      amazon: 'https://www.amazon.com/dp/0465094279/',
      wikipedia: 'https://en.wikipedia.org/wiki/The_Master_Algorithm'
    },
    wordcount: 113535,
    tags: ['computer programming logic', 'artificial intelligence expert systems', 'business development']
  },
  {
    title: 'The Spell of the Sensuous',
    subtitle: 'Perception and Language in a More-Than-Human World',
    authors: ['David Abram'],
    year: 1997,
    month: 2,
    isbn13: '978-0679776390',
    image: 'https://images-na.ssl-images-amazon.com/images/I/511reY7gVKL._SX322_BO1,204,203,200_.jpg',
    url: {
      publisher: 'https://www.penguinrandomhouse.com/books/319/the-spell-of-the-sensuous-by-david-abram/',
      amazon: 'https://www.amazon.com/dp/0679776397',
      free: 'https://projects.iq.harvard.edu/files/retreat/files/abram_the_spell_of_the_sensuous_perception.pdf'
    },
    wordcount: 104980,
    tags: ['existentialist philosophy', 'humanist philosophy', 'linguistics reference']
  },
  {
    title: 'The Hidden Life of Trees',
    subtitle: 'What They Feel, How They Communicate – Discoveries from a Secret World',
    authors: ['Peter Wohlleben'],
    year: 2015,
    month: 5,
    isbn13: '978-1771642484',
    image: 'https://images-na.ssl-images-amazon.com/images/I/41uEMy1V0JL._SX348_BO1,204,203,200_.jpg',
    url: {
      publisher: 'https://greystonebooks.com/products/the-hidden-life-of-trees',
      amazon: 'https://www.amazon.com/dp/1771642483'
    },
    wordcount: 65830,
    tags: ['plant & animal photography', 'trees in biological sciences', 'nature writing & essays']
  },
  {
    title: 'The Unsettling of America',
    subtitle: 'Culture & Agriculture',
    authors: ['Wendell Berry'],
    year: 1977,
    month: 1,
    isbn13: '978-0871568779',
    image: 'https://images-na.ssl-images-amazon.com/images/I/51qxoAVZ1xL._SX321_BO1,204,203,200_.jpg',
    url: {
      publisher: 'https://www.counterpointpress.com/dd-product/the-unsettling-of-america/',
      amazon: 'https://www.amazon.com/dp/0871568772'
    },
    wordcount: 60000,
    tags: ['agricultural science history', 'agriculture', 'nature writing & essays']
  },
  {
    title: 'PiHKAL',
    subtitle: 'A Chemical Love Story',
    authors: ['Alexander Shulgin', 'Ann Shulgin'],
    year: 1991,
    month: 10,
    isbn13: '978-0963009609',
    image: 'https://images-na.ssl-images-amazon.com/images/I/41LR44C2IjL._SX331_BO1,204,203,200_.jpg',
    url: {
      publisher: 'https://www.transformpress.com/pihkal-phenethylamines-i-have-known-and-loved',
      amazon: 'https://www.amazon.com/dp/0963009605',
      wikipedia: 'https://en.wikipedia.org/wiki/PiHKAL',
      free: 'https://erowid.org/library/books_online/pihkal/pihkal.shtml'
    },
    wordcount: 244500,
    tags: ['industrial & technical chemistry', 'general chemistry', 'drug dependency recovery']
  },
  {
    title: 'TiHKAL',
    subtitle: 'The Continuation',
    authors: ['Alexander Shulgin', 'Ann Shulgin'],
    year: 2002,
    month: 5,
    isbn13: '978-0963009692',
    image: 'https://images-na.ssl-images-amazon.com/images/I/41HHS2jXbDL._SX331_BO1,204,203,200_.jpg',
    url: {
      publisher: 'https://www.transformpress.com/tihkal-tryptamines-i-have-known-and-loved',
      amazon: 'https://www.amazon.com/dp/0963009699',
      wikipedia: 'https://en.wikipedia.org/wiki/TiHKAL'
    },
    wordcount: 201000,
    tags: ['industrial & technical chemistry', 'general chemistry', 'drug dependency recovery']
  }
];

export default books;