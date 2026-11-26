import { getPaginationLastPage } from '../../../utils/pagination/getPaginationLastPage';
import { getLimit } from './limitInput';
import pokemonArray from '../../../data/pokemon.json';
import { app } from '../../app';

export const pageInput = (page: number): HTMLDivElement => {
  const inputId = 'page';

  const label = document.createElement('label');
  label.setAttribute('for', inputId);
  label.textContent = 'Page: ';

  const input = document.createElement('input');
  input.setAttribute('id', inputId);
  input.setAttribute('type', 'number');
  input.setAttribute('min', '1');
  input.setAttribute('max', '100');
  input.setAttribute('value', `${page}`);

  const limit = getLimit();
  input.addEventListener('change', (event) => {
    const target = event.currentTarget as HTMLInputElement;
    app({ limit, page: Number(target.value || 0) });
  });

  const div = document.createElement('div');
  div.appendChild(label);
  div.appendChild(input);

  return div;
};

export const getPage = (): number => {
  const defaultValue = 1;

  const node = document.querySelector('#page');

  if (!(node instanceof HTMLInputElement)) {
    return defaultValue;
  }

  const page = Number(node.value);

  const limit = getLimit();
  const itemsCount: number = pokemonArray.length;
  const lastPage = getPaginationLastPage(limit, itemsCount);

  if (page <= 0 || page > lastPage) {
    return 1;
  }

  return page;
};
