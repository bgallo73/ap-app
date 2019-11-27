document.getElementById('button-div').onclick = flip;

function flip(){
    if (Math.ceil(Math.random() * 2) % 2 == 0) {
        show("heads");
    }
    else{
        show("tails");
    }
}

function show(coin) {
    document.getElementById("result").innerHTML = coin; // this took me an embarrassingly long time to do, but thanks anyway https://stackoverflow.com/questions/32302066/coin-toss-with-javascript-and-html
}
