import './pokemonArrayDiv.css';
import pokemonArray from '../../../../data/pokemon.json';
import { getLimit } from '../../pokemonFooter/limitInput';
import { getPage } from '../../pokemonFooter/pageInput';

export const pokemonArrayDiv = (): HTMLDivElement => {
  const div = document.createElement('div');
  div.setAttribute('id', 'pokemonArray');
  div.classList.add('pokemon_array');
  return div;
};

export const getPokemonArrayDiv = (): HTMLDivElement => {
  const selector = '#pokemonArray';
  const div = document.querySelector(selector);
  if (!div) {
    throw new Error(`Node is not found: ${selector}`);
  }
  if (!(div instanceof HTMLDivElement)) {
    throw new Error('Node is not div elemen');
  }
  return div;
};

export const renderPokemon = (): void => {
  const limit = getLimit();

  const page = getPage();

  const start = (page - 1) * limit;
  const end = start + limit;
  const array = pokemonArray.slice(start, end);

  const div = getPokemonArrayDiv();
  div.replaceChildren();

  for (let i = 0; i < array.length; i += 1) {
    const currentPokemon = array[i];
    const pokemonElement = document.createElement('div');
    pokemonElement.classList.add('pokemon_array__element');
    pokemonElement.innerHTML = `
            <div>${currentPokemon.id}</div>
            <div>${currentPokemon.name}</div>
            <div class="pokemon_array__image_block">
                <img src="${currentPokemon.image}" alt="no image">
            </div>
            <div>${currentPokemon.weight} x ${currentPokemon.height}</div>
            <div>${currentPokemon.types.join('')}</div>
        `;
    div.appendChild(pokemonElement);
  }
};
