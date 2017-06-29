var Pokedex = require('pokedex-promise-v2');
var Poke = new Pokedex();

Poke.getPokemonByName('eevee') // with Promise
    .then(function(response) {
      console.log(response.stats);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });