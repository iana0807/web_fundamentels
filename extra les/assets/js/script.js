var butontomaat = document.querySelector(".buton-tomaat");
var moestuiElement = document.querySelector(".moestuin");
var butonPaprika=document.querySelector(".buton-paprika");
var butonPatat = document.querySelector(".buton-patat");
console.log(moestuiElement);

butontomaat.addEventListener("click", function(){
    var tomaat = document.createElement("div");
    tomaat.classList.add("tomaat");
    moestuiElement.append(tomaat);
    console.log(tomaat);
})
butonPaprika.addEventListener("click", function(){
    var paprika = document.createElement("div");
    paprika.classList.add("paprika");
    moestuiElement.append(paprika);
    console.log(paprika);
})
butonPatat.addEventListener("click", function(){
    var patat = document.createElement("div");
    patat.classList.add("patat");
    moestuiElement.append(patat);
    console.log(patat);
})
