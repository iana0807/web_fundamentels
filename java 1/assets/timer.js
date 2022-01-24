var seconds = 0;
var timerEllement =document.querySelector("#timer");

setTimeout(function(){
var timer = setInterval(function() {
    seconds++    
    console.log(seconds);
    
    timerEllement.innerHTML = seconds;
    
    if (seconds >= 10)
    {
        clearInterval(timer);
    }
}, 1000); // 1000 = aantal milliseconden

    console.log(" we zitten op 5 secondel");
}, 5000);