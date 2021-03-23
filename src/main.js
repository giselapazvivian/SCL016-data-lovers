import { example } from './data.js';
// import data from './data/lol/lol.js';
import data from './data/pokemon/pokemon.js';
// import data from './data/rickandmorty/rickandmorty.js';
//declarar constantes


//pasar de 1ra página a 2da página
const buttonClick = document.getElementById("Click");

const buttonPage2 = () => {
     
    document.querySelector(".page1").style.display = "none";
    document.querySelector(".page2").style.display = "block";
}
buttonClick.addEventListener("click", buttonPage2);

//pasar de 2da página a 3ra página
const button1 =document.getElementById("steelButton")
const button2 =document.getElementById("waterButton")
const button3 =document.getElementById("bugButton")
const button4 =document.getElementById("electricButton")
const button5 =document.getElementById("ghostButton")
const button6 =document.getElementById("fireButton")
const button7 =document.getElementById("fairyButton")
const button8 =document.getElementById("iceButton")
const button9 =document.getElementById("fightingButton")
const button10 =document.getElementById("normalButton")
const button11 =document.getElementById("grassButton")
const button12 =document.getElementById("psychicButton")
const button13 =document.getElementById("rockButton")
const button14 =document.getElementById("darkButton")
const button15 =document.getElementById("groundButton")
const button16 =document.getElementById("poisonButton")
const button17 =document.getElementById("flyingButton")


const buttonPage3 = (e) => {
     let buttonValue=e.target.value     
    document.querySelector(".page2").style.display = "none";
    document.querySelector(".page3").style.display = "block";
}

button1.addEventListener("click", buttonPage3);
button2.addEventListener("click", buttonPage3);
button3.addEventListener("click", buttonPage3);
button4.addEventListener("click", buttonPage3);
button5.addEventListener("click", buttonPage3);
button6.addEventListener("click", buttonPage3);
button7.addEventListener("click", buttonPage3);
button8.addEventListener("click", buttonPage3);
button9.addEventListener("click", buttonPage3);
button10.addEventListener("click", buttonPage3);
button11.addEventListener("click", buttonPage3);
button12.addEventListener("click", buttonPage3);
button13.addEventListener("click", buttonPage3);
button14.addEventListener("click", buttonPage3);
button15.addEventListener("click", buttonPage3);
button16.addEventListener("click", buttonPage3);
button17.addEventListener("click", buttonPage3);



//seleccinar tipo de pokemón
const steelPokemon = document.getElementById("steelButton");
const waterPokemon = document.getElementById("waterButton");
const bugPokemon = document.getElementById("bugButton");
const electricPokemon = document.getElementById("electricButton");
const ghostPokemon = document.getElementById("ghostButton");
const firePokemon = document.getElementById("fireButton");
const fairyPokemon = document.getElementById("fairyButton");
const icePokemon = document.getElementById("iceButton");
const fightingPokemon = document.getElementById("fightingButton");
const normalPokemon = document.getElementById("normalButton");
const grassPokemon = document.getElementById("grassButton");
const psychicPokemon = document.getElementById("psychicButton");
const rockPokemon = document.getElementById("rockButton");
const darkPokemon = document.getElementById("darkButton");
const groundPokemon = document.getElementById("groundButton");
const poisonPokemon = document.getElementById("poisonButton");
const flyingPokemon = document.getElementById("flyingButton");

const typeFunction = (e) => {
     let buttonValue=e.target.value
     let pokemon1= data.pokemon.filter(x => x.type.includes(buttonValue));
console.log(buttonValue)    
console.log(pokemon1)
}

steelPokemon.addEventListener("click", typeFunction);
waterPokemon.addEventListener("click", typeFunction);
bugPokemon.addEventListener("click", typeFunction);
electricPokemon.addEventListener("click", typeFunction);
ghostPokemon.addEventListener("click", typeFunction);
firePokemon.addEventListener("click", typeFunction);
fairyPokemon.addEventListener("click", typeFunction);
icePokemon.addEventListener("click", typeFunction);
fightingPokemon.addEventListener("click", typeFunction);
normalPokemon.addEventListener("click", typeFunction);
grassPokemon.addEventListener("click", typeFunction);
psychicPokemon.addEventListener("click", typeFunction);
rockPokemon.addEventListener("click", typeFunction);
darkPokemon.addEventListener("click", typeFunction);
groundPokemon.addEventListener("click", typeFunction);
poisonPokemon.addEventListener("click", typeFunction);
flyingPokemon.addEventListener("click", typeFunction);

// console.log(example, data);

