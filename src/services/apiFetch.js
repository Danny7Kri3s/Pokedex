export const getPokemonEvolutionChain = async (pokemonId) => {
  try {
    const speciesResponse = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonId}/`);
    const speciesData = await speciesResponse.json();
    const evolutionChain = speciesData.evolution_chain.url;
    const evolutionChainResponse = await fetch(evolutionChain);
    const evolutionChainData = await evolutionChainResponse.json();
    return evolutionChainData;

  } catch (e) {
    console.log(e.message);
    return null;
  }
};


// fetching pokemon weakness
export const fetchWeakness = async (types) => {
  try {

    const typePromises = types?.map(typeInfo =>
      fetch(typeInfo.type.url).then(response => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.json();
      })
    );
    const typeResponses = await Promise?.all(typePromises);
    const weaknessesList = [];

    typeResponses?.forEach(response => {
      const damageRelations = response.damage_relations;
      damageRelations.double_damage_from?.forEach(type => {
        weaknessesList.push(type.name);
      });
    });

    return weaknessesList;

  } catch(e) {
    console.log(e.message)
  }
};

// fetch pokemon species

export const fetchPokemonSpecies = async (id) => {
  try {
    const speciesRes = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}/`);
    const speciesData = await speciesRes.json();
    return speciesData;
  } catch(e) {
    console.log(e.message)
  }
}

export const pad= (number, length) => {
  // Convert the number to a string
  let str = '' + number;

  // Add leading zeros until the string reaches the desired length
  while (str.length < length) {
      str = '0' + str;
  }

  // Return the padded string
  return str;
}
