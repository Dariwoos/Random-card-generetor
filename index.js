let numberarray = ["1","2","3","4","5","6","7","8","9","10","J","k"];
let arrayicon = ["♥","♣","♦","♠"];


var arraynumberIndex = Math.floor(Math.random() * numberarray.length);
var arrayiconIndex = Math.floor(Math.random() * arrayicon.length);

let stynumbers = document.getElementById("num");
stynumbers.style.fontSize= "150px";
let syuicon= document.getElementById("righIcon");




document.getElementById("num").innerHTML = numberarray[arraynumberIndex];
document.getElementById("leftIcon",).innerHTML = arrayicon[arrayiconIndex];
document.getElementById("righIcon",).innerHTML = arrayicon[arrayiconIndex];