document.getElementById("flip-coin").onclick = function coinFlip(){
    let amount = prompt("How many times would you like to flip the coin?")
    while (amount < 1|| amount > 10000){
        amount = prompt("How many times would you like to flip the coin? Any value from 1 to 10000.")
    }
    let heads = 0;
    let tails = 0;
    for (let i = 0; i < amount; i++){
        if((Math.ceil(Math.random() * 2) % 2) == 0){
            heads++
        }
        else{
            tails++
        }
    }
    console.log(heads)
    console.log(tails)
    document.getElementById("heads-amount-p").classList.remove("hidden");
    document.getElementById("heads-amount").innerHTML = heads;
    document.getElementById("tails-amount-p").classList.remove("hidden");
    document.getElementById("tails-amount").innerHTML = tails;
    if(heads > tails){
        document.getElementById("coin-image").src = "img/heads.png"
    }
    else{
        document.getElementById("coin-image").src = "img/tails.png"
    }
}

document.getElementById("roll-dice").onclick = function diceRoll() {
    /* let die1 = (Math.floor(Math.random() * 6) + 1);
    let die2 = (Math.floor(Math.random() * 6) + 1);
    document.getElementById("die-1-result").innerHTML = die1;
    document.getElementById("die-2-result").innerHTML = die2;
    document.getElementById("die-1-img").src = "img/dice-" + die1 + ".png";
    document.getElementById("die-2-img").src = "img/dice-" + die2 + ".png";
    document.getElementById("dice-result-p").classList.remove("hidden");
    document.getElementById("dice-score-message").classList.remove("hidden");
    document.getElementById("dice-score").innerHTML = score; */

    let amount = prompt("How many dice would you like to roll the dice? Minimum of 1, maximum of 5.")
    while (amount > 5 || amount < 1){
        amount = prompt("How many dice would you like to roll the dice? Minimum of 1, maximum of 5.")
    }

    let rollResults = [];
    for (let i = 0; i < amount; i++){
        rollResults.push(Math.floor(Math.random() * 6) + 1)
    }
    diceSum = rollResults.reduce(function(rollResults, a) { return rollResults + a; }, 0);
    diceAverage = (diceSum / amount);

    document.getElementById("dice-result-p").classList.remove("hidden");
    document.getElementById("dice-result").innerHTML = rollResults;
    console.log(rollResults)
    /* document.getElementById("die-" + rollResults[0] + "-img").src = "img/dice-" + rollResults[0] + ".png";
    document.getElementById("die-" + rollResults[rollResults.length - 1] + "-img").src = "img/dice-" + rollResults[rollResults.length - 1] + ".png"; */
    console.log(diceSum)
    if (amount > 1){ //if statement so total and average are ignored if only one die is rolled
    document.getElementById("dice-sum-p").classList.remove("hidden")
    document.getElementById("dice-sum").innerHTML = diceSum;
    document.getElementById("dice-average-p").classList.remove('hidden')
    document.getElementById("dice-average").innerHTML = diceAverage;
    }
    }