const words = [
    "Java Developer",
    "Web Developer",
    "AI Enthusiast",
    "Problem Solver"
];

let wordIndex = 0;

const typingText = document.getElementById("typing-text");

function changeWord() {

    typingText.textContent = words[wordIndex];

    wordIndex++;

    if (wordIndex >= words.length) {
        wordIndex = 0;
    }

}

changeWord();

setInterval(changeWord,2000);