const fs = require('fs');
const pomekonData = require('./../raw-pokemons/pokemons.json');

async function main() {
    const array = pomekonData.data.pokemon;
    const newArray = [];
    const categories = {};
    
    let html = '<div style="display: flex; justify-content: center; align-items: center; flex-wrap: wrap; gap: 8px;">';

    for (let i = 0; i < array.length; i++) {
        const pokemon = array[i];

        const id = pokemon.id;
        const name = pokemon.name;
        const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

        const data = {
            id,
            name,
            image,
            weight: pokemon.weight,
            height: pokemon.height,
            base_experience: pokemon.base_experience,
            types: pokemon.pokemontypes.map(e => {
                categories[e.type.name] = categories[e.type.name] + 1 || 1;
                return e.type.name
            }),
        };

        newArray.push(data);

        html += `
            <div style="border: 1px solid #06c; padding: 8px;">
                <div>id = ${id}</div>
                <div>${name}</div>
                <div>
                    <img src="${image}" alt="no image" style="max-width: 100px; max-height: 100px;">
                </div>
                <div>${data.types}</div>
            </div>
        `;
    }

    html += '</div>';

    await fs.promises.writeFile('./pokemons.json', JSON.stringify(newArray, null, 2));
    await fs.promises.writeFile('./pokemons.html', html);
    await fs.promises.writeFile('./categories.json', JSON.stringify(categories, null, 2));
}

main();