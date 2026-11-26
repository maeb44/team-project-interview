import { renderPokemon } from './pokemonPage/pokemonContent/pokemonArrayDiv/pokemonArrayDiv';
import { pokemonPage } from './pokemonPage/pokemonPage';

export const app = (props: { page: number; limit: number } = { page: 1, limit: 21 }): void => {
  console.info('app render', props.page, props.limit);
  const selector = '#app';
  const div = document.querySelector(selector);
  if (!div) {
    console.info(`Node is not found: ${selector}`);
    return;
  }

  div.replaceChildren();
  div.appendChild(pokemonPage(props));

  renderPokemon();
};
