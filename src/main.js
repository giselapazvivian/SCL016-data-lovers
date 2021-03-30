import { example } from './data.js';

// import data from './data/pokemon/pokemon.js';




//pasar de 1ra página a 2da página
const buttonClick = document.getElementById("Click");

const buttonPage2 = () => {
     
    document.querySelector(".page1").style.display = "none";
    document.querySelector(".page2").style.display = "block";
}
buttonClick.addEventListener("click", buttonPage2);

//pasar de 2da página a 3ra página
const sbmt =document.getElementById("submitButton")
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

const buttonPage3 = () => { 
    document.querySelector(".page2").style.display = "none";
    document.querySelector(".page3").style.display = "block";
}

sbmt.addEventListener("click", buttonPage3)
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




// console.log(example, data);