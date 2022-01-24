

var characters = [
    "harry",
    "ron",
    "hermoni",
    "voldemort"
];

// maak het aantazl kaarten
var cards =[];

for (var index = 0; index < characters.length; index++){
    // eerste kaard
    cards.push(characters[index]);
    // 2 de
    cards.push(characters[index]);

}
// voeg cards toe aan game
var gameElement = document.querySelector("#game");
for (var index =0; index < cards.length; index++)
{
    // cards maken
    var cardsElement =document.createElement("div");
    cardsElement.innerHTML = cards[index];
    cardsElement.classList.add("card");
    cardsElement.dataset.person = cards[index];
    // namen toevoegen
    gameElement.append(cardsElement);
}

// card moet luisteren naar klik
var cardsElements = document.querySelectorAll(".card");
var activeCards = [];

for(var index = 0; index < cardsElements.length; index++){
    cardsElements [index].addEventListener("click", function() {
        if (activeCards.length < 2){
            activeCards.push(this); // geselecteerde kaart toevi-oegen aan enn arrey
            this.classList.add("visible"); 
        }

        if (activeCards == 2){
            // check cards
            if (activeCards[0].dataset.person == activeCards[1].dataset.person){
                console.log("match");
            }
            else {
                settimeout (function(){
                    console.log("no");
                    activeCards[0].classList.remove("visible");
                    activeCards[1].classList.remove("visible");
                    
                    activeCards = [];
                }, 2000);
            }
        }
    });
}


