const instructionsDiv = document.getElementById("instructions");
const gameContainerDiv = document.getElementById("gameContainer");
const pixelManVideo = document.getElementById("pixelManVideo");

function startGame() {
    instructionsDiv.classList.add("fade-out");
    gameContainerDiv.classList.remove("fade-out");
    pixelManVideo.style.display = "block";
    pixelManVideo.play();

    setTimeout(function() {
        pixelManVideo.classList.add("fade-out");
        redirectToWebsite();
    }, 15000);
}

function redirectToWebsite() {
    // Change the URL to the desired website
    window.location.href = "https://bryanisrealomgomg.github.io/Hiii/"; // Replace this URL with your desired website URL
}

setTimeout(startGame, 15000);
