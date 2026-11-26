import { limitInput } from './limitInput';
import { pageInput } from './pageInput';
import { pokemonArrayDiv, renderPokemon } from './pokemonArrayDiv';

export const app = (): void => {
  const selector = '#app';
  const div = document.querySelector(selector);
  if (!div) {
    console.info(`Node is not found: ${selector}`);
    return;
  }

  div.appendChild(pokemonArrayDiv());
  div.appendChild(limitInput());
  div.appendChild(pageInput());

  renderPokemon();
};
