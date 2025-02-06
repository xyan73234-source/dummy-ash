const messages = [
    "Are you sure?",
    "Really sure??",
    "Are you positive?",
    "ash really bro??",
    "Just think about it!",
    "If you say no, I will nuke your house",
    "ong i will",
    "i will get you twinks!!!!",
    "Ok fine, I will stop asking...",
    "Jarvis, nuke this bitchasses house"
];

let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}