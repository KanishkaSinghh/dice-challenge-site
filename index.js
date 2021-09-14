var randomNumber=Math.floor((Math.random()*6)+1);

var randomimage= "images/dice" +randomNumber+".png"

var image1 =document.querySelectorAll("img")[0];

image1.setAttribute("src",randomimage );

var randomNumber2=Math.floor((Math.random()*6)+1);

var randomimage2= "images/dice" +randomNumber+".png"

document.querySelectorAll("img")[1].setAttribute("src",randomimage2 );

if (randomNumber>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 wins";
}else if (randomNumber<randomNumber2){
        document.querySelector("h1").innerHTML="Player 2 wins";
}else{
    document.querySelector("h1").innerHTML="Draw!";
}
