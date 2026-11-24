import type { Pokemon, Filters } from '../types';

export function filterPokemon(pokemon: Pokemon[], filters: Filters) {
  const {
    filterTypes,
    minHP,
    maxHP,
    minAttack,
    maxAttack,
    minDefense,
    maxDefense,
    minSpecAttack,
    maxSpecAttack,
    minSpecDefense,
    maxSpecDefense,
    minSpeed,
    maxSpeed,
  } = filters;

  return pokemon.filter((p) => {
    if (filterTypes.length && !filterTypes.some((t) => p.types.includes(t))) return false;

    if (!inRange(p.hp, minHP, maxHP)) return false;
    if (!inRange(p.attack, minAttack, maxAttack)) return false;
    if (!inRange(p.defense, minDefense, maxDefense)) return false;
    if (!inRange(p.specialAttack, minSpecAttack, maxSpecAttack)) return false;
    if (!inRange(p.specialDefense, minSpecDefense, maxSpecDefense)) return false;
    if (!inRange(p.speed, minSpeed, maxSpeed)) return false;

    return true;
  });
}

function inRange(value: number, min: number, max: number) {
  if (value < min || value > max) return false;
  return true;
}
