import './pokemonFooter.css';
import pokemonArray from './../../../data/pokemon.json';
import { getLimit, limitInput } from './limitInput';
import { getPage, pageInput } from './pageInput';
import { getPaginationLastPage } from '../../../utils/pagination/getPaginationLastPage';

export const pokemonFooter = (props: { page: number; limit: number }): HTMLDivElement => {
  const div = document.createElement('div');
  div.classList.add('pokemon_footer');
  div.appendChild(limitInput(props.limit));
  div.appendChild(pageInput(props.page));
  div.appendChild(pokemonFooterStatus());
  return div;
};

const pokemonFooterStatus = (): HTMLDivElement => {
  const limit = getLimit();
  const itemsCount = pokemonArray.length;
  const lastPage = getPaginationLastPage(limit, itemsCount);
  const page = getPage();

  const div = document.createElement('div');
  div.textContent = `${page}/${lastPage}`;
  return div;
};
