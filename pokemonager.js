(() => {
  class Pokemonager {
    constructor() {
      this.baseURL = "https://pokeapi.co/api/v2/pokemon/";
    }

    // This should return an array of all the names of n Pokemon from the Pokemon API.
    findNames(n) {
      let pokeResponse = fetch(this.baseURL + "?limit=" + n)
        .then((response) => response.json())
        .then((json) => {
          return json.results.map((pokemon) => pokemon.name);
        });
      return pokeResponse;
    }
    // This should return an array of all the Pokemon that are under a particular weight.

    async findUnderWeight(weight) {
      // ** LIMIT TO THE FIRST 10 POKEMON
      // We don't want to make too many unnecessary calls to the Pokemon API
      let underWeight = [];

      for (let i = 1; i <= 10; i++) {
        let pokemon = await this.getPokemon(i);

        if (pokemon.weight < weight) {
          underWeight.push(pokemon);
        }
      }
      console.log(underWeight);
      return underWeight;
    }

    getPokemon(n) {
      let pokeResponse = fetch(this.baseURL + n + "/")
        .then((response) => response.json())
        .then((json) => {
          return json;
        });
      return pokeResponse;
    }
  }

  window.Pokemonager = Pokemonager;
})();
