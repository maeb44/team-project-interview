import './pokemonFilters.css';

export const pokemonFilters = (): HTMLDivElement => {
  const div = document.createElement('div');
  div.classList.add('pokemon_filters');

  div.innerHTML = `
    <div class="pokemon_filters__range_block">
      <label>Name:</label>
      <div>
        <input type="search" name="name" style="width: 100%;">
      </div>
    </div>
    <div class="pokemon_filters__range_block">
      <label>HP:</label>
      <div>
        <input type="number" min="0" name="min_hp" value="0">
        <input type="number" min="0" name="max_hp">
      </div>
    </div>
    <div class="pokemon_filters__range_block">
      <label>Attack:</label>
      <div>
        <input type="number" min="0" name="min_attack" value="0">
        <input type="number" min="0" name="max_attack">
      </div>
    </div>
    <div class="pokemon_filters__range_block">
      <label>Defense:</label>
      <div>
        <input type="number" min="0" name="min_defense" value="0">
        <input type="number" min="0" name="max_defense">
      </div>
    </div>
    <div class="pokemon_filters__range_block">
      <label>Special Attack:</label>
      <div>
        <input type="number" min="0" name="min_specialAttack" value="0">
        <input type="number" min="0" name="max_specialAttack">
      </div>
    </div>
    <div class="pokemon_filters__range_block">
      <label>Special Defense:</label>
      <div>
        <input type="number" min="0" name="min_specialDefense" value="0">
        <input type="number" min="0" name="max_specialDefense">
      </div>
    </div>
    <div class="pokemon_filters__range_block">
      <label>Speed:</label>
      <div>
        <input type="number" min="0" name="min_speed" value="0">
        <input type="number" min="0" name="max_speed">
      </div>
    </div>
  `;
  return div;
};
