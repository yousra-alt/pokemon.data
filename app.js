"use strict";

window.addEventListener("load", initApp);


async function initApp() {
    const snorlax = await getCharacter("data/pokemon.json");
    showPokemon(snorlax);

}

async function getCharacter (url) {
const response = await fetch (url);
const data = response.json();
return data;

}

function showPokemon(pokemon) {
  const pokemonHTML = /*html*/ `
  <section class = "grid-item">
<p>The Pokemon name is ${pokemon.name}</p>
<img src= "${pokemon.image}">
<p>${pokemon.description}</p>

<p> 
</section>
`;

document
  .querySelector("#pokeInfo")
  .insertAdjacentHTML("beforeend", pokemonHTML);
        document
          .querySelector("#pokeInfo section:last-child")
          .addEventListener("click", pokemonClicked);

function pokemonClicked() {
  showPokemonModal(pokemon);
}

}



function showPokemonModal(pokemon) {
    document.querySelector("#image").src = pokemon.image;
    document.querySelector("#dexIndex").textContent = pokemon.dexIndex;
    document.querySelector("#footprint").textContent = pokemon.footprint;
    document.querySelector("#name").textContent = pokemon.name;
    document.querySelector("#type").textContent = pokemon.type;
    document.querySelector("#abilities").textContent = pokemon.abilities;
    document.querySelector("#description").textContent = pokemon.description;
    document.querySelector("#weakness").textContent = pokemon.weaknesses;
    document.querySelector("#weight").textContent = pokemon.weight;
    document.querySelector("#height").textContent = pokemon.height;
    document.querySelector("#gender").textContent = pokemon.gender;
    document.querySelector("#generation").textContent = pokemon.generation;
    document.querySelector("#spilversion").textContent = pokemon.spilversion;
    document.querySelector("#canEvolve").textContent = pokemon.canEvolve;
    document.querySelector("#statsHp").textContent = pokemon.statsHp;
    document.querySelector("#statsattack").textContent = pokemon.statsattack;
    document.querySelector("#statsDefence").textContent = pokemon.statsDefence;
    document.querySelector("#statsSpecialAttack").textContent = pokemon.statsSpecialAttack;
    document.querySelector("#statsSpecialDefence").textContent = pokemon.statsSpecialDefence;
    document.querySelector("#statsSpeed").textContent = pokemon.statsSpeed;
    
    document.querySelector("#dialog-pokemon").showModal();
 
}

function addPokemon(pokemon) {
  const pokemonHTML = /*html*/ `
<p>The Pokemon name is: ${pokemon.name}</p>
<p>${pokemon.description}</p>
<img src= "${pokemon.image}">
<p> abipties:${pokemon.abipties}</p>
<p>The footprint is: ${pokemon.footprint}</p>
<p>dexindex: ${pokemon.dexindex}</p>
<p>type: ${pokemon.type}</p>
<p>subtype: ${pokemon.subtype}</p>
<p>weaknesses:${pokemon.weaknesses}</p>
<p>Snorlax can be ${pokemon.gender}</p>
<p>weight: ${pokemon.weight}</p>
<p>height: ${pokemon.height}</p>
<p>generation: ${pokemon.generation}</p>
<p>spilversion is ${pokemon.spilversion}</p>
<p> ${pokemon.name} can evolve: ${pokemon.canEvolve} </p>
<p>statsHp: ${pokemon.statsHp}</p>
<p>statsattack: ${pokemon.statsattack}</p>
<p>statsDefence: ${pokemon.statsDefence}</p>
<p>statsSpecialAttack: ${pokemon.statsSpecialAttack}</p>
<p>statsSpecialDefence: ${pokemon.statsSpecialDefence}</p>
<p>statsSpeed: ${pokemon.statsSpeed}</p> 
`;
  document
    .querySelector("#pokeInfo")
    .insertAdjacentHTML("beforeend", pokemonHTML);
}





 
