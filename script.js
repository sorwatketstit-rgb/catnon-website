const image = document.getElementById("mainImage");
const text = document.getElementById("text");
const choices = document.getElementById("choices");
const sound = document.getElementById("typeSound");

const message = "Do you want to see my cat?";

let index = 0;

// Fade image in after page loads
window.onload = () => {
    setTimeout(() => {
        image.classList.add("fade-in");
        startTyping();
    }, 500);
};

function startTyping() {
    if (index < message.length) {
        text.textContent += message[index];

        // play typing sound
        sound.currentTime = 0;
        sound.play();

        index++;
        setTimeout(startTyping, 60);
    } else {
        choices.classList.remove("hidden");
    }
}

// Choice 1 -> Rickroll
document.getElementById("choice1").onclick = () => {
    window.location.href =
        "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
};

// Choice 2 -> Cat
document.getElementById("choice2").onclick = () => {

    // hide text and buttons
    text.style.display = "none";
    choices.style.display = "none";

    // change to BIG image
    image.src = "mikhao.jpg";

    // make it fullscreen
    image.style.width = "100%";
    image.style.marginTop = "0";
};