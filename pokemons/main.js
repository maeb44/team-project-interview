const fs = require('fs');
const pomekonData = require('./../raw-pokemons/pokemons.json');

async function main() {
    const array = pomekonData.data.pokemon;
    const newArray = [];
    const globalCategories = {};
    const globalStats = {}

    let html = '<div style="display: flex; justify-content: center; align-items: center; flex-wrap: wrap; gap: 8px;">';

    for (let i = 0; i < array.length; i++) {
        const pokemon = array[i];

        const id = pokemon.id;

        if (id === 10264 || id === 10266 || id === 10268 || id === 10270) {
            continue;
        }

        const name = pokemon.name;
        const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`;

        const categories = pokemon.pokemontypes.map(e => {
            globalCategories[e.type.name] = globalCategories[e.type.name] + 1 || 1;
            return e.type.name
        });

        const stats = {};

        pokemon.pokemonstats.forEach(e => {
            const name = e.stat.statnames[0].name;
            const value = e.base_stat;
            stats[name] = value;
            globalStats[name] = globalStats[name] + 1 || 0
        });

        const data = {
            id,
            name,
            image,
            weight: pokemon.weight,
            height: pokemon.height,
            base_experience: pokemon.base_experience,
            categories,
            stats,
        };

        newArray.push(data);

        html += `
            <div style="border: 1px solid #06c; padding: 8px;">
                <div>id = ${id}</div>
                <div>${name}</div>
                <div>
                    <img src="${image}" alt="no image" style="max-width: 100px; max-height: 100px;">
                </div>
                <div>${data.categories}</div>
            </div>
        `;
    }

    html += '</div>';

    await fs.promises.writeFile('./pokemons.json', JSON.stringify(newArray, null, 2));
    await fs.promises.writeFile('./pokemons.html', html);
    await fs.promises.writeFile('./categoriesWithCount.json', JSON.stringify(globalCategories, null, 2));
    await fs.promises.writeFile('./categories.json', JSON.stringify(Object.keys(globalCategories), null, 2));
    await fs.promises.writeFile('./globalStats.json', JSON.stringify(globalStats, null, 2));
    await fs.promises.writeFile('./stats.json', JSON.stringify(Object.keys(globalStats), null, 2));
}

main();