//document.getElementById("demo").innerHTML =
//Math.floor(Math.random() * 6) + 1;

//var diceResult = document.querySelector('#roll-result');

//function rolldice() {
//var rollResult = Math.floor(Math.random() * 6) + 1;
//diceResult.innerHTML = '<img src="' + rollResult + '.png">';
//}

var rollResult = Math.floor(Math.random() * 6) + 1;

var imageContainer = document.getElementById("dice-1");
if (rollResult == 1) imageContainer.innerHTML = '<img src="./dice/1.png">';
else if (rollResult == 2) imageContainer.innerHTML = '<img src="./dice/2.png">';
else if (rollResult == 3) imageContainer.innerHTML = '<img src="./dice/3.png">';
else if (rollResult == 4) imageContainer.innerHTML = '<img src="./dice/4.png">';
else if (rollResult == 5) imageContainer.innerHTML = '<img src="./dice/5.png">';
else  imageContainer.innerHTML = '<img src="./dice/6.png">';


var rollResult2 = Math.floor(Math.random() * 6) + 1;

var imageContainer = document.getElementById("dice-2");
if (rollResult2 == 1) imageContainer.innerHTML = '<img src="./dice/1.png">';
else if (rollResult2 == 2) imageContainer.innerHTML = '<img src="./dice/2.png">';
else if (rollResult2 == 3) imageContainer.innerHTML = '<img src="./dice/3.png">';
else if (rollResult2 == 4) imageContainer.innerHTML = '<img src="./dice/4.png">';
else if (rollResult2 == 5) imageContainer.innerHTML = '<img src="./dice/5.png">';
else  imageContainer.innerHTML = '<img src="./dice/6.png">';

if(rollResult>rollResult2){
    document.querySelector('h1').innerHTML="the winner is user1"

}else if(rollResult<rollResult2){
    document.querySelector('h1').innerHTML="the winner is user2"

}
else{
    document.querySelector('h1').innerHTML="Draw"
}

