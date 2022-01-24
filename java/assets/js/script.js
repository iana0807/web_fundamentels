var user ={
    username: "IanVandeVondel",
    password: "Ianvdv"
};

console.log(user.username);
console.log(user.password);

// referenties
var buttonElement = document.querySelector(".button-login");
var inputUsernameElement = document.querySelector("#input-username");
var inputpaswoordElement = document.querySelector("#paswoord-username");
var bodyElement =  document.querySelector("body");
console.log(bodyElement);

console.log(buttonElement);
console.log(inputUsernameElement);
console.log(inputpaswoordElement);


buttonElement.addEventListener("click", function(){
    var givenusername = inputUsernameElement.value;
    var givenpaswoord = inputpaswoordElement.value;

    console.log(givenusername);
    console.log(givenpaswoord);

});

if (
    givenusername == user.username && 
    givenpaswoord == user.password
    ){
        console.log("is corect")
        bodyElement.style.backgroundColor = "green"
    }
    else{
        console.log("niet corect")
    }