var headsCount = 0;
var tailsCount = 0;

function coinTossFunction() { 

var coinFlip = Math.floor(Math.random() * 2);
    if (coinFlip === 1) {
        document.getElementById("picture").src = "heads.jpg";
        headsCount++;
        document.getElementById("heads-count").innerHTML = headsCount;
        document.getElementById("total-count").innerHTML = headsCount + tailsCount;
    } else if (coinFlip === 0) {
        document.getElementById("picture").src = "tails.jpg";
        tailsCount++;
        document.getElementById("tails-count").innerHTML = tailsCount;
        document.getElementById("total-count").innerHTML = headsCount + tailsCount;
    }
}
