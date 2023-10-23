// the first random images
var randomNum1 = Math.floor(Math.random() * 6) + 1; //random1-6

var randomDiceImage1 = "dice" + randomNum1 + ".png"; //dice1.png-dice6.png

var randomImageSource1 = "images/" + randomDiceImage1; //images/dice1.png...

var image1 = document.querySelectorAll('img')[0];
image1.setAttribute("src", randomImageSource1);

// the 2nd random images
var randomNum2 = Math.floor(Math.random() * 6) + 1; //random1-6

var randomImageSource2 = "images/dice" + randomNum2 + ".png" ; //images/dice1.png...

var image2 = document.querySelectorAll('img')[1].setAttribute("src", randomImageSource2);

//if player1 wins
if (randomNum1 > randomNum2) {
    document.querySelector('h1').innerHTML = "🚩Player 1 win!";
}
else if(randomNum1 < randomNum2){
    document.querySelector('h1').innerHTML = "Player 2 win!🚩";
}
else{
    document.querySelector('h1').innerHTML = "✮ Draw! ✮";
}


