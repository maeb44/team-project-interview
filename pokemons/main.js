const fs = require('fs');
const pomekonData = require('./../raw-pokemons/pokemons.json');

async function main() {
    const array = pomekonData.data.pokemon;
    const newArray = [];
    const categories = {};
    
    for (let i = 0; i < array.length; i++) {
        const pokemon = array[i];
        newArray.push({
            id: pokemon.id,
            name: pokemon.name,
            weight: pokemon.weight,
            height: pokemon.height,
            base_experience: pokemon.base_experience,
            types: pokemon.pokemontypes.map(e => {
                categories[e.type.name] = categories[e.type.name] + 1 || 1;
                return {
                    id: e.slot,
                    name: e.type.name,
                }
            }),
        });

        
    }





    await fs.promises.writeFile('./pokemons.json', JSON.stringify(newArray, null, 2));
    await fs.promises.writeFile('./categories.json', JSON.stringify(categories, null, 2));
}

main();