document.getElementById("flip-coin").onclick = function(){
    if (Math.ceil(Math.random() * 2) % 2 == 0) {
        show("heads");
    }
    else{
        show("tails");
    }
}

function show(coin) {
    document.getElementById("coin-result").innerHTML = coin; // this took me an embarrassingly long time to do, but thanks anyway https://stackoverflow.com/questions/32302066/coin-toss-with-javascript-and-html
}

document.getElementById("roll-dice").onclick = function diceRoll(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
    
}

function show(dice) {
    document.getElementById("dice-result").innerHTML = dice;
}