"use strict";

const snorlax = {
  name: "Snorlax",
  description:
    "It is not satisfied unless it eats over 880 pounds of food every day. When it is done eating, it goes promptly to sleep.",
  abilities: "Thick Fat, Immunity",
  image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/143.png",
  footprint: "undefined",
  dexindex: 143,
  type: "normal",
  subtype: "undefined",
  weaknesses: "Fighting",
  gender: "male and female",
  weight: 459,
  height: 210,
  generation: 2,
  spilversion: "undefined",
  canEvolve: true,
  statsHp: 10,
  statsattack: 7,
  statsDefence: 4,
  statsSpecialAttack: 4,
  statsSpecialDefence: 7,
  statsSpeed: 2,
};

function showPokemon(pokemon) {
  const pokemonHTML = /*html*/ `
<li>The Pokemon name is: ${pokemon.name}</li>
<li>${pokemon.description}</li>
<img src= "${pokemon.image}">
<li> abilities:${pokemon.abilities}</li>
<li>The footprint is: ${pokemon.footprint}</li>
<li>dexindex: ${pokemon.dexindex}</li>
<li>type: ${pokemon.type}</li>
<li>subtype: ${pokemon.subtype}</li>
<li>weaknesses:${pokemon.weaknesses}</li>
<li>gender: ${pokemon.gender}</li>
<li>weight: ${pokemon.weight}</li>
<li>height: ${pokemon.height}</li>
<li>generation: ${pokemon.generation}</li>
<li>spilversion is: ${pokemon.spilversion}</li>
<li> ${pokemon.name} can evolve: ${pokemon.canEvolve} </li>
<li>statsHp: ${pokemon.statsHp}</li>
<li>statsattack: ${pokemon.statsattack}</li>
<li>statsDefence: ${pokemon.statsDefence}</li>
<li>statsSpecialAttack: ${pokemon.statsSpecialAttack}</li>
<li>statsSpecialDefence: ${pokemon.statsSpecialDefence}</li>
<li>statsSpeed: ${pokemon.statsSpeed}</li> 
`;
  document
    .querySelector("#snorlaxData")
    .insertAdjacentHTML("beforeend", pokemonHTML);
}

showPokemon(snorlax);
