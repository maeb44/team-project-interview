import './pokemonPage.css';
import { pokemonFooter } from './pokemonFooter/pokemonFooter';
import { pokemonContent } from './pokemonContent/pokemonContent';

export const pokemonPage = (props: { page: number; limit: number }): HTMLDivElement => {
  const div = document.createElement('div');
  div.classList.add('pokemon_page');
  div.appendChild(pokemonContent());
  div.appendChild(pokemonFooter(props));
  return div;
};
