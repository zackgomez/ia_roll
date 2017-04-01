export const WHITE = {
  imagePrefix: 'white',
  faces: [
  {},
  {evade: 1},
  {block: 1},
  {evade: 1, block: 1},
  {evade: 1, block: 1},
  {dodge: 1},
  ],
};

export const BLACK = {
  imagePrefix: 'black',
  faces: [
  {evade: 1},
  {block: 1},
  {block: 1},
  {block: 2},
  {block: 2},
  {block: 3},
  ],
};

export const RED = {
  imagePrefix: 'red',
  faces: [
  {hit: 1},
  {hit: 2},
  {hit: 2},
  {hit: 2, surge: 1},
  {hit: 3},
  {hit: 3},
  ],
};

export const YELLOW = {
  imagePrefix: 'yellow',
  faces: [
  {hit: 1, surge: 2},
  {surge: 1},
  {hit: 1, surge: 1, accuracy: 1},
  {hit: 2, accuracy: 1},
  {hit: 1, accuracy: 2},
  {surge: 1, accuracy: 2},
  ],
};

export const GREEN = {
  imagePrefix: 'green',
  faces: [
  {hit: 2, accuracy: 1},
  {hit: 1, surge: 1, accuracy: 1},
  {surge: 1, accuracy: 1},
  {hit: 1, surge: 1, accuracy: 2},
  {hit: 2, accuracy: 2},
  {hit: 2, accuracy: 3},
  ],
}

export const BLUE = {
  imagePrefix: 'blue',
  faces: [
  {surge: 1, accuracy: 2},
  {hit: 1, accuracy: 2},
  {hit: 1, surge: 1, accuracy: 3},
  {hit: 2, accuracy: 3},
  {hit: 2, accuracy: 4},
  {hit: 1, accuracy: 5},
  ],
};

export const ORDER = [
  'RED', 'YELLOW', 'GREEN', 'BLUE', 'BLACK', 'WHITE',
];
