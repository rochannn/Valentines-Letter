// script.js
var noClicks = 0;

function moveNo() {
    var noButton = document.getElementById("noButton");
    var letterContainer = document.getElementById("letterContainer");
    noClicks++;
    if (noClicks >= 5) {
        noButton.style.display = "none";
    } else {
        var xPos = Math.random() * (letterContainer.offsetWidth - noButton.offsetWidth);
        var yPos = Math.random() * (letterContainer.offsetHeight - noButton.offsetHeight);
        noButton.style.position = "absolute";
        noButton.style.left = xPos + "px";
        noButton.style.top = yPos + "px";
    }
}


function expandYes() {
    var yesButton = document.getElementById("yesButton");
    var noButton = document.getElementById("noButton");
    yesButton.textContent = "I LOVEEEEE YOUUUUU SOO MUCHHHH MOREEEEEE";
    yesButton.style.backgroundColor = "#FFD1DA	";
    yesButton.style.color = "black";
    yesButton.style.fontWeight = "bold";
    yesButton.style.fontSize = "20px"; 
    noButton.style.display = "none";
}

document.getElementById("letterGif").addEventListener("click", function() {
    var letterContainer = document.getElementById("letterContainer");
    if (letterContainer.style.display === "none") {
        document.body.style.transition = "background-color 0.5s ease";
        document.body.style.backgroundColor = "#FBA1B7";
        letterContainer.style.display = "block";
        setTimeout(function() {
            letterContainer.style.top = "calc(100% - 20px)"; // Adjust as needed
            letterContainer.style.opacity = "1";
        }, 400); // Delay for smoother transition
    } else {
        document.body.style.transition = "background-color 0.5s ease";
        document.body.style.backgroundColor = "white";
        letterContainer.style.top = "100%";
        letterContainer.style.opacity = "0";
        setTimeout(function() {
            letterContainer.style.display = "none";
        }, 500); // Delay for smoother transition
    }
});

