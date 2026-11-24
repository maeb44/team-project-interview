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
  minHP: number;
  maxHP: number;
  minAttack: number;
  maxAttack: number;
  minDefense: number;
  maxDefense: number;
  minSpecAttack: number;
  maxSpecAttack: number;
  minSpecDefense: number;
  maxSpecDefense: number;
  minSpeed: number;
  maxSpeed: number;
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
