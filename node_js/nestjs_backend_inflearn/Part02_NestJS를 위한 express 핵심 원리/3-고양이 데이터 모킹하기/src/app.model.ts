export type CatType = {
  id: string;
  name: string;
  age: number;
  species: string;
  isCute: boolean;
  friends: string[];
};

export const Cat: CatType[] = [
  {
    id: '5MkuQpgy',
    name: 'blue',
    age: 8,
    species: 'Russian Blue',
    isCute: true,
    friends: ['2mDbhpB7', 'PwJn5vuJ'],
  },
  {
    id: '2vjxJ5zH',
    name: 'som',
    age: 4,
    species: 'Sphynx cat',
    isCute: true,
    friends: ['LpVKDu2d', '2mDbhpB7'],
  },
  {
    id: 'PwJn5vuJ',
    name: 'lean',
    age: 6,
    species: 'Munchkin',
    isCute: false,
    friends: [],
  },
  {
    id: '2mDbhpB7',
    name: 'star',
    age: 10,
    species: 'Scottish Fold',
    isCute: true,
    friends: ['LpVKDu2d'],
  },
  {
    id: 'LpVKDu2d',
    name: 'red',
    age: 2,
    species: 'Sharm',
    isCute: false,
    friends: [],
  },
];
