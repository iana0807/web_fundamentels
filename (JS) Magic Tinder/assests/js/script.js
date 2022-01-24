// Variabelen aanmaken
var naamElement = document.querySelector(".naam");
var likeElement = document.querySelector(".like");
var dislikeElement = document.querySelector(".dislike");
var endElement = document.getElementById("#end");
var dislikeArray = [];
var likeArray = [];
var count = 1;
// like button code***************************************************************
likeElement.addEventListener("click", function()
{    
    if (count == 1)
    {
        naamElement.innerHTML = "Hermione Granger";
        document.querySelector(".imgJS").src = "assests/img/hermione.jpeg";
        likeArray.push("Harry Potter");        
    }
    if (count == 2)
    {
        naamElement.innerHTML = "Ronald Bilius Weasley";
        document.querySelector(".imgJS").src = "assests/img/ronald.jpeg";
        likeArray.push("Hermione Granger");
    }
    if (count == 3)
    {
        naamElement.innerHTML = "Ginny Weasley";
        document.querySelector(".imgJS").src = "assests/img/ginny.jpeg";
        likeArray.push("Ronald Bilius Weasley");
    }
    if (count == 4)
    { 
        naamElement.innerHTML = "";
        document.querySelector(".imgJS").remove();
        likeElement.remove();
        dislikeElement.remove();
        likeArray.push("Ginny Weasley");
        document.getElementById("end").textContent = "The end";
        document.getElementById("likes").textContent = "Likes: " + likeArray;
        document.getElementById("dislikes").textContent = "Dislikes: " + dislikeArray;
    }
    count++;
});
// dislike button code*************************************************************************
dislikeElement.addEventListener("click", function()
{
    if (count == 1)
    {
        naamElement.innerHTML = "Hermione Granger";
        document.querySelector(".imgJS").src = "assests/img/hermione.jpeg";
        dislikeArray.push("Harry Potter");
        
    }
    if (count == 2)
    {
        naamElement.innerHTML = "Ronald Bilius Weasley";
        document.querySelector(".imgJS").src = "assests/img/ronald.jpeg";
        dislikeArray.push("Hermione Granger");
    }
    if (count == 3)
    {
        naamElement.innerHTML = "Ginny Weasley";
        document.querySelector(".imgJS").src = "assests/img/ginny.jpeg";
        dislikeArray.push("Ronald Bilius Weasley");
    }
    if (count == 4)
    {
        naamElement.innerHTML = "";
        document.querySelector(".imgJS").remove();
        likeElement.remove();
        dislikeElement.remove();
        dislikeArray.push("Ginny Weasley");
        document.getElementById("end").textContent = "The end";
        document.getElementById("likes").textContent = "Likes: " + likeArray;
        document.getElementById("dislikes").textContent = "Dislikes: " + dislikeArray;
    }
    count++;
});
