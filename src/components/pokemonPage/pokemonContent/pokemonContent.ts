import './pokemonContent.css';
import { pokemonArrayDiv } from './pokemonArrayDiv/pokemonArrayDiv';
import { pokemonFilters } from './pokemonFilters/pokemonFilters';

export const pokemonContent = (): HTMLDivElement => {
  const div = document.createElement('div');
  div.classList.add('pokemon_content');
  div.appendChild(pokemonArrayDiv());
  div.appendChild(pokemonFilters());
  return div;
};
