

let pikachu = {
  name: "Pikachu",
  health: 45,
  image: "pikachu (1).png",
  level: 8,
};

let bulbasaur = {
  name: "Bulbasaur",
  health: 70,
  image: "bulbasaur.png",
  level: 12,
};

let oranguru = {
  name: "Oranguru",
  health: 170,
  image: "oranguru.png",
  level: 45,
};

let drowzee = {
  name: "Drowzee",
  health: 90,
  image: "drowzee.png",
  level: 33,
};

let possiblePokemon = [pikachu, bulbasaur, oranguru, drowzee];
let randomPokemon = null;
let coughtPokemon = [];


let player = {
    Name: "Mattias",
    Health: 230,
    Image: "pokemonTrainerIdle.png",
    level: 42,
    pokemon: ['Charizard'],
};







const app = document.getElementById("app");

updateView();

function updateView() {
  getRandomPokemon()
  app.innerHTML = /*HTML*/ `
  <div class="container">
    <div class="opposingPokemon">
        <div>${randomPokemon.name}</div> 
        <div>lvl: ${randomPokemon.level}</div>
        <img src="${randomPokemon.image}">
    </div>
    
    <div class="bottomScreen">
        <div class="player">
            <img src="${player.Image}">
            <div>${player.Name}</div>
        </div>

        <div class="buttonContainer">
            <button onclick="catchPokemon()">Fang</button>    
            <button onclick="updateView()">Finn en annen</button>
            <button onclick="showWitchPokemonCought()">Vis dine pokemon</button>       
        </div>
         </div>
        </div>
  `;
}


function showWitchPokemonCought() {
      html = '';
      for (i = 0; i < coughtPokemon.length; i++) {
        app.innerHTML += ` <lo>${coughtPokemon[i].name}</lo>`;
      }
      
   
     
}

function caughtPokemonView(){
  app.innerHTML = /*HTML*/`
  <div class="caughtContainer">
    <h1>Du fanget ${randomPokemon.name}</h1>
    <div class="buttonContainer">
              <button onclick="updateView()">Finn en annen</button>
              <button onclick="showWitchPokemonCought()">Vis dine pokemon</button>
          </div>
  </div>
  
  `;
}

function catchPokemon(){
  coughtPokemon.push(randomPokemon);
  caughtPokemonView();
}



function getRandomPokemon(){
  let randomNum = Math.floor(Math.random() * possiblePokemon.length);
  randomPokemon = possiblePokemon[randomNum];
}