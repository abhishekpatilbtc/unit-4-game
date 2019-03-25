//define variables
var score = 0;
var win = 0;
var loss = 0;

//random values for gems
function stones () {
realityStone = Math.floor((Math.random() * 12) + 1);
powerStone = Math.floor((Math.random() * 8) + 1);
soulStone = Math.floor((Math.random() * 6) + 1);
timeStone = Math.floor((Math.random() * 10) + 1);
}

stones ();
//write code to generate random number
function generateRandomNumber () {
    randomNumber = Math.floor((Math.random() * 50) + 15);
    $('#random-number').html(randomNumber);
}
//reset stats
function myReset() {
    score = 0;
    $('#score').html(score);
    generateRandomNumber();
    stones ();
}

// write code to add values as buttons get clicked
function powerStoneClick () {
    score += powerStone;
    $('#score').html(score);
    conditions ();
    
}
function realityStoneClick () {
    score+= realityStone;
    $('#score').html(score);
    conditions ();
}
function soulStoneClick () {
    score += soulStone;
    $('#score').html(score);
    conditions ();
}
function timeStoneClick () {
    score += timeStone;
    $('#score').html(score);
    conditions ();
}
//call generate random number function
generateRandomNumber();

//function for conditions
function conditions () {

if (score == randomNumber) {
    win++;
    $('#win').html(win);
    console.log("You Win");
    myReset()
    }   
if (score > randomNumber){
    console.log("Game Over")
    loss++;
    $('#loss').html(loss);
    myReset()
    }
}
//function for clicks
function init () {
     
    $('#power').on('click', powerStoneClick); //Power Click Button
    $('#reality').on('click', realityStoneClick); //Reality Click Button
    $('#soul').on('click', soulStoneClick); //Soul Click Button
    $('#time').on('click', timeStoneClick); //Time Click Button
    console.log('Your score is:' + score);
    console.log('Random Number is:' + randomNumber);
  

// write code to match score with randomNumber
    
}

init ();
//Print Win and Losses

