// Generating Random Number

var randNum1 = Math.floor(Math.random() * 6) + 1;

var randNum2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage1 = "images/dice" + randNum1 + ".png";

var randomDiceImage2 = "images/dice" + randNum2 + ".png";

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomDiceImage1);

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomDiceImage2);

if (randNum1 > randNum2) {
    document.querySelector("h1").innerHTML = "🚩 Player1 wins";
} else if (randNum2 > randNum1) {
    document.querySelector("h1").innerHTML = "Player2 wins 🚩";
} else {
    document.querySelector("h1").innerHTML = "🚩 Draw 🚩 "
}