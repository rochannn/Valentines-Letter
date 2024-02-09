// script.js
document.getElementById("letterGif").addEventListener("click", function() {
    var letterContainer = document.getElementById("letterContainer");
    if (letterContainer.style.display === "none") {
        document.body.style.transition = "background-color 0.5s ease";
        document.body.style.backgroundColor = "#FFDDCC";
        letterContainer.style.display = "block";
        setTimeout(function() {
            letterContainer.style.top = "calc(100% - 20px)"; // Adjust as needed
            letterContainer.style.opacity = "1";
        }, 400); // Delay for smoother transition
    } else {
        document.body.style.transition = "background-color 0.5s ease";
        document.body.style.backgroundColor = "#FFEECC";
        letterContainer.style.top = "100%";
        letterContainer.style.opacity = "0";
        setTimeout(function() {
            letterContainer.style.display = "none";
        }, 500); // Delay for smoother transition
    }
});

