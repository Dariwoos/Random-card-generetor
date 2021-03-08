let numberarray = ["1","2","3","4","5","6","7","8","9","10","J","k"];
let arrayicon = ["\u2665","\u2666","\u2663","\u2660"];


var arraynumberIndex = Math.floor(Math.random() * numberarray.length);
var arrayiconIndex = Math.floor(Math.random() * arrayicon.length);

if(arrayicon=="\u2665" || arrayicon=="\u2666" ){
    console.log(true);
    document.querySelector("#leftIcon").style.color="red";
    document.querySelector("#righIcon").style.color="red";
    document.querySelector("#num").style.color="red";

}else{
    document.querySelector("#leftIcon").style.color="black";
    document.querySelector("#righIcon").style.color="black";
    document.querySelector("#num").style.color="black";

}

document.getElementById("num").innerHTML = numberarray[arraynumberIndex];
document.getElementById("leftIcon",).innerHTML = arrayicon[arrayiconIndex];
document.getElementById("righIcon",).innerHTML = arrayicon[arrayiconIndex];
