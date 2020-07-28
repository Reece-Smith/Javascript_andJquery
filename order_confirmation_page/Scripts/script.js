// Variables to hold user information and message
var name = "Hello Reece";
var message = ", please check your order:";
// Variable containg the concatenation of the above
var welcome = name + message;
//Variables containing the information about the user's order
var games = ["Call of Duty","Fallout","Star Fox"];
var gamePrices = [50,45,10];
var numGames = gamePrices.length;
var x =null;
for(var i=0;i<numGames;i++){
    x += gamePrices[i];
}
var subTotal = x;
var shipping = 5;
var grandTotal = subTotal + shipping;
//Grab the welcome message element and update it's contents
var msgEl = document.getElementById("message");
msgEl.textContent = welcome;
//Grab the games list element and update it's contents
var gameEl = document.getElementById("gameList");
gameEl.textContent = games.join(", ");
//Grab the subtotal element and update it's contents
var subEl = document.getElementById("subtotal");
subEl.textContent = "£ " + subTotal;
//Grab the shipping element and update it's contents
var shipEl = document.getElementById("shipping");
shipEl.textContent = "£ " + shipping;
//Grab the total element and update it's contents
var totalEl = document.getElementById("total");
totalEl.textContent = "£ " + grandTotal;