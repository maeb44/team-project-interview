import { getPaginationLastPage } from '../utils/pagination/getPaginationLastPage';
import { getLimit } from './limitInput';
import pokemonArray from './../data/pokemon.json';
import { renderPokemon } from './pokemonArrayDiv';
import { updateUrl } from '../utils/pagination/updateUrl';

export const pageInput = (): HTMLDivElement => {
  const inputId = 'page';

  const currentPage = getPage();
  const max = 100;
  const min = 1;

  const label = document.createElement('label');
  label.setAttribute('for', inputId);
  label.textContent = 'Page: ';

  const input = document.createElement('input');
  input.setAttribute('id', inputId);
  input.setAttribute('type', 'number');
  input.setAttribute('min', `${min}`);
  input.setAttribute('max', `${max}`);
  input.setAttribute('value', `${currentPage}`);
  input.addEventListener('change', () => {
    const value = Number(input.value);
    if (value > max || value < min) return;
    updateUrl(value);
    renderPokemon();
  });

  const div = document.createElement('div');
  div.appendChild(label);
  div.appendChild(input);

  return div;
};

export const getPage = (): number => {
  const params = new URLSearchParams(window.location.search);
  const page = Number(params.get('page')) || 1;

  const limit = getLimit();
  const itemsCount: number = pokemonArray.length;
  const lastPage = getPaginationLastPage(limit, itemsCount);

  if (page <= 0 || page > lastPage) {
    return 1;
  }
  return page;
};
