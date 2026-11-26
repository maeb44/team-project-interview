import { renderPokemon } from './pokemonArrayDiv';

export const limitInput = (): HTMLDivElement => {
  const inputId = 'limit';

  const label = document.createElement('label');
  label.setAttribute('for', inputId);
  label.textContent = 'Limit: ';

  const input = document.createElement('input');
  input.setAttribute('id', inputId);
  input.setAttribute('type', 'number');
  input.setAttribute('min', '1');
  input.setAttribute('max', '100');
  input.setAttribute('value', '10');
  input.addEventListener('change', () => renderPokemon());

  const div = document.createElement('div');
  div.appendChild(label);
  div.appendChild(input);

  return div;
};

export const getLimit = (): number => {
  const defaultValue = 10;

  const node = document.querySelector('#limit');

  if (!(node instanceof HTMLInputElement)) {
    return defaultValue;
  }

  const limit = Number(node.value);

  return limit > 0 ? limit : defaultValue;
};
