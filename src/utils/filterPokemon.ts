import type { Pokemon, Filters } from '../types';

export function filterPokemon(pokemon: Pokemon[], filters: Filters) {
  const { filterTypes, hp, attack, defense, specAttack, specDefense, speed } = filters;

  return pokemon.filter((p) => {
    if (filterTypes.length && !filterTypes.some((t) => p.types.includes(t))) return false;

    if (!inRange(p.hp, hp.min, hp.max)) return false;
    if (!inRange(p.attack, attack.min, attack.max)) return false;
    if (!inRange(p.defense, defense.max, defense.max)) return false;
    if (!inRange(p.specialAttack, specAttack.min, specAttack.max)) return false;
    if (!inRange(p.specialDefense, specDefense.min, specDefense.max)) return false;
    if (!inRange(p.speed, speed.min, speed.max)) return false;

    return true;
  });
}

function inRange(value: number, min: number, max: number) {
  if (value < min || value > max) return false;
  return true;
}
