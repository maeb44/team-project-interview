import { updateUrl } from '../utils/pagination/updateUrl';
import { renderPokemon } from './pokemonArrayDiv';

export const limitInput = (): HTMLDivElement => {
  const inputId = 'limit';

  const label = document.createElement('label');
  label.setAttribute('for', inputId);
  label.textContent = 'Limit: ';

  const currentLimit = getLimit();
  const max = 100;
  const min = 1;

  const input = document.createElement('input');
  input.setAttribute('id', inputId);
  input.setAttribute('type', 'number');
  input.setAttribute('min', `${min}`);
  input.setAttribute('max', `${max}`);
  input.setAttribute('value', `${currentLimit}`);
  input.addEventListener('change', () => {
    const value = Number(input.value);
    if (value > max || value < min) return;
    updateUrl(undefined, value);
    renderPokemon();
  });

  const div = document.createElement('div');
  div.appendChild(label);
  div.appendChild(input);

  return div;
};

export const getLimit = (): number => {
  const params = new URLSearchParams(window.location.search);
  const limit = Number(params.get('limit'));
  if (limit < 0) return 10;
  return limit || 10;
};
