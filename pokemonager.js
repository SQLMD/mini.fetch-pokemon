(() => {
  class Pokemonager {
    // This should return an array of all the names of n Pokemon from the Pokemon API.
    findNames(n) {
      let pokeResponse = fetch("https://pokeapi.co/api/v2/pokemon/?limit=" + n)
        .then((response) => response.json())
        .then((json) => {
          return json.results.map((pokemon) => {
            return pokemon.name;
          });
        });
      return pokeResponse;
    }
    // This should return an array of all the Pokemon that are under a particular weight.

    findUnderWeight(weight) {
      // Your code here.
      // ** LIMIT TO THE FIRST 10 POKEMON
      // We don't want to make too many unnecessary calls to the Pokemon API
    }
  }

  window.Pokemonager = Pokemonager;
})();
