let numberArray = ["1","2","3","4","5","6","7","8","9","10","J","k"];
let arrayIcon = ["\u2665","\u2666","\u2663","\u2660"];

function random  (myArray){
    let randomCard = Math.floor(Math.random() * (myArray.length));
    return random;

}
let numbersArray = numberArray[random(numberArray)];
let arrayIcons = arrayIcon[random(arrayIcon)];


if(arrayIcon=="\u2665" || arrayIcon=="\u2666" ){
    document.querySelector("#leftIcon").style.color="red";
    document.querySelector("#righIcon").style.color="red";
    document.querySelector("#num").style.color="red";
}else{
    document.querySelector("#leftIcon").style.color="black";
    document.querySelector("#righIcon").style.color="black";
    document.querySelector("#num").style.color="black";

}

document.getElementById("num").innerHTML = numberArray;
document.getElementById("leftIcon",).innerHTML = arrayIcons;
document.getElementById("righIcon",).innerHTML = arrayIcons;
