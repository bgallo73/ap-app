let byId = document.getElementById.bind(document)

byId("flip-coin").onclick = function coinClick(){
    let amount = parseInt(byId("coin-amount").value)
    if (amount < 1|| amount > 10000){
        alert("Choose a number from 1 to 1000.")
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
    byId("heads-amount-p").classList.remove("hidden");
    byId("heads-amount").innerHTML = heads;
    byId("tails-amount-p").classList.remove("hidden");
    byId("tails-amount").innerHTML = tails;
    if(heads > tails){
        byId("coin-image").src = "img/heads.png"
    }
    else{
        byId("coin-image").src = "img/tails.png"
    }
}

byId("roll-dice").onclick = function diceRoll() {
    let amount = parseInt(byId("dice-amount").value)
    if (amount < 1|| amount > 5){
        alert("Choose a number from 1 to 5.")
    }

    let rollResults = [];
    for (let i = 0; i < amount; i++){
        rollResults.push(Math.floor(Math.random() * 6) + 1)
    }
    diceSum = rollResults.reduce(function(rollResults, a) { return rollResults + a; }, 0);
    diceAverage = (diceSum / amount);

    byId("dice-result-p").classList.remove("hidden");
    byId("dice-result").innerHTML = rollResults;
    byId("die-1-img").src = "img/dice-" + rollResults[0] + ".png"
    byId("die-2-img").src = "img/dice-" + rollResults[1] + ".png"
    byId("die-3-img").src = "img/dice-" + rollResults[2] + ".png"
    byId("die-4-img").src = "img/dice-" + rollResults[3] + ".png"
    byId("die-5-img").src = "img/dice-" + rollResults[4] + ".png"
    if (amount > 1){ //if statement so total and average are ignored if only one die is rolled
        byId("dice-sum-p").classList.remove("hidden")
        byId("dice-sum").innerHTML = diceSum;
        byId("dice-average-p").classList.remove('hidden')
        byId("dice-average").innerHTML = diceAverage;
    }
    }