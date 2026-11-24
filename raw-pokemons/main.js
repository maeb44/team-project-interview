const fs = require('fs');

const GRAPHQL = `
query CardListQuery {
    pokemon_aggregate(where: {name: {_like: "%%"}}) {
        aggregate {
            count
        }
    }
    pokemon(limit: 1000000, offset: 0, where: {name: {_like: "%%"}}) {
        base_experience
        height
        id
        is_default
        name
        pokemon_species_id
        weight
        pokemonabilities {
            ability {
                abilitynames(where: {language: {id: {_eq: 9}}}) {
                    id
                    name
                }
            }
        }
        pokemontypes {
            slot
            type {
                name
            }
        }
        pokemonsprites {
            sprites
        }
        pokemoncries {
            cries
        }
        pokemonstats {
            pokemon_id
            id
            base_stat
            stat {
                id
                statnames(where: {language: {id: {_eq: 9}}}) {
                id
                language {
                    id
                }
                language_id
                name
                stat_id
                }
            }
        }
    }
}
`;

async function main() {
    const URL_ = `https://graphql.pokeapi.co/v1beta2`;

  const RESPONSE = await fetch(URL_, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: GRAPHQL,
    }),
  });

  const HTTP_STATUS = RESPONSE.status;
  if (HTTP_STATUS !== 200) {
    const TEXT = await RESPONSE.text();
    const MESSAGE = `HTTP ${HTTP_STATUS}\n${TEXT}`;
    throw new Error(`${MESSAGE}`);
  }

  const DATA = await RESPONSE.json();

  await fs.promises.writeFile('pokemons.json', JSON.stringify(DATA, null, 2))
}

main();