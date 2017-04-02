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
  {damage: 1},
  {damage: 2},
  {damage: 2},
  {damage: 2, surge: 1},
  {damage: 3},
  {damage: 3},
  ],
};

export const YELLOW = {
  imagePrefix: 'yellow',
  faces: [
  {damage: 1, surge: 2},
  {surge: 1},
  {damage: 1, surge: 1, accuracy: 1},
  {damage: 2, accuracy: 1},
  {damage: 1, accuracy: 2},
  {surge: 1, accuracy: 2},
  ],
};

export const GREEN = {
  imagePrefix: 'green',
  faces: [
  {damage: 2, accuracy: 1},
  {damage: 1, surge: 1, accuracy: 1},
  {surge: 1, accuracy: 1},
  {damage: 1, surge: 1, accuracy: 2},
  {damage: 2, accuracy: 2},
  {damage: 2, accuracy: 3},
  ],
}

export const BLUE = {
  imagePrefix: 'blue',
  faces: [
  {surge: 1, accuracy: 2},
  {damage: 1, accuracy: 2},
  {damage: 1, surge: 1, accuracy: 3},
  {damage: 2, accuracy: 3},
  {damage: 2, accuracy: 4},
  {damage: 1, accuracy: 5},
  ],
};

export const ALL_DICE = [
  'RED', 'YELLOW', 'GREEN', 'BLUE', 'BLACK', 'WHITE',
];

export const ATTACK_DICE = [
  'RED', 'YELLOW', 'GREEN', 'BLUE',
];

export const DEFENSE_DICE = [
  'BLACK', 'WHITE',
]
