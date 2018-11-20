
var n = 5;
function myFunction() {
    var x;
    x = document.getElementById("guessNum").value;
    document.getElementById("demo").innerHTML = x;
    return x;
}

 function comLetter() {
     "use strict";
     var i = 0;
     var x = myFunction(x);
	var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
	var string_length = 8;
	var randomstring = '';
	for (var i=0; i<string_length; i++) {
		var rnum = Math.floor(Math.random() * chars.length);
		randomstring += chars.substring(rnum,rnum+1);
    
    document.getElementById("demo2").innerHTML = 'Computer is ' + randomstring[i];
    i = i+1;
    myFunction();

    if (x == randomstring[i]) {
        document.getElementById("demo3").innerHTML = "Ypou Win, game is over";
    } else {
        n = n-1;
        document.getElementById("demo3").innerHTML = "You Loose, " + "Your Guess left " + n;
    }

    if (n == 0) {
        document.getElementById("demo4").innerHTML = "You Loose, game over, Reload the page";
        setTimeout(function() { alert("Reload the page to start the game"); }, 3000);    
    }
    return (n);
}
 }
