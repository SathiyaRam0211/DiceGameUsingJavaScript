var images = ["images/dice1.png","images/dice2.png","images/dice3.png","images/dice4.png","images/dice5.png","images/dice6.png"];
var randomNumber1 = Math.floor(Math.random()*6)+1 ;
var randomNumber2 = Math.floor(Math.random()*6)+1 ;
if(randomNumber1>randomNumber2)
  {
    document.querySelector("h1").innerHTML = "🍁 Player 1 Wins.";
  }
else if( randomNumber1 === randomNumber2)
      {
        document.querySelector("h1").innerHTML = "Both Players 🍕 Win.";
      }
      else
      {
        document.querySelector("h1").innerHTML = "Player 2 Wins. 🍁";
      }
document.querySelector(".img1").setAttribute("src",images[randomNumber1]);
document.querySelector(".img2").setAttribute("src",images[randomNumber2]);
