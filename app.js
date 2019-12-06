document.getElementById("flip-coin").onclick = function coinFlip(){
    let coinValue = (Math.ceil(Math.random() * 2) % 2)
    if (coinValue == 0){
        document.getElementById("coin-result").innerHTML = "heads";
        document.getElementById("coin-image").src = "img/heads.png";
    }
    else{
        document.getElementById("coin-result").innerHTML = "tails";
        document.getElementById("coin-image").src = "img/tails.png";
    }
}

document.getElementById("roll-dice").onclick = function diceRoll() {
    let die1 = (Math.floor(Math.random() * 6) + 1)
    let die2 = (Math.floor(Math.random() * 6) + 1)
    document.getElementById("die-1-result").innerHTML = die1;
    document.getElementById("die-2-result").innerHTML = die2;
}

