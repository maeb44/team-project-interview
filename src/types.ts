export type State = {
  favorites: FavoritePokemon[];
  category: Category[];
};

export type Pokemon = {
  id: number;
  name: string;
  image: string;
  weight: number;
  height: number;
  baseExperience: number;
  types: Category[];
  hp: number;
  attack: number;
  defense: number;
  specialAttack: number;
  specialDefense: number;
  speed: number;
};

export type Filters = {
  filterTypes: Category[];
  hp: minMax;
  attack: minMax;
  defense: minMax;
  specAttack: minMax;
  specDefense: minMax;
  speed: minMax;
};
type minMax = {
  min: number;
  max: number;
};

type FavoritePokemon = {
  id: number;
  date: string;
};

export type Category =
  | 'grass'
  | 'poison'
  | 'fire'
  | 'flying'
  | 'water'
  | 'bug'
  | 'normal'
  | 'electric'
  | 'ground'
  | 'fairy'
  | 'fighting'
  | 'psychic'
  | 'rock'
  | 'steel'
  | 'ice'
  | 'ghost'
  | 'dragon'
  | 'dark';
