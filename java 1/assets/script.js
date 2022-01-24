console.log("date");
var buttonEllement = document.querySelector("#button-date");
var inputEllement = document.querySelector("#birthedate");

buttonEllement.addEventListener("click", function(){
    calculateDayoftheweek(inputEllement.value);
});
console.log(buttonEllement);
console.log(inputEllement);


function calculateDayoftheweek(inputdate){

    var now = new Date(); // nu
    var birthdate = new Date(inputdate);
    var daysofweek = [
    "zondag",
    "maandag",
    "dinsdag",
    "woensdag",
    "donderdag",
    "vrijdag",
    "zaterdag",
    "zondag"
];



var birthdateYear = birthdate.getFullYear(); // 2003
var nowYear = now.getFullYear(); // 2021

for (var year = birthdateYear; year <= nowYear; year++)
{
    var nextDate = new Date(year, birthdate.getMonth(), birthdate.getDate());
    console.log(nextDate.getFullYear() + ": " + daysofweek[nextDate.getDay()]);
}


}

