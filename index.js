// Simple Text Animation
const textElement = document.getElementById("animated-text");
const textArray = ["Hello Iam Arfat", "coming soon my gameplay video's", "Join the gaming site"];
let textIndex = 0;

function changeText() {
    textElement.innerHTML = textArray[textIndex];
    textIndex = (textIndex + 1) % textArray.length;
}

setInterval(changeText, 3000); // Change text every 3 seconds
