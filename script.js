/* =========================================
   GET OUR HTML ELEMENTS
========================================= */

const openButton = document.getElementById("openButton");
const openingScreen = document.getElementById("openingScreen");
const mainContent = document.getElementById("mainContent");
const celebrationContainer = document.getElementById("celebrationContainer");
const ayahCounter = document.getElementById("ayahCounter");
const finalButton = document.getElementById("finalButton");
const finalMessage = document.getElementById("finalMessage");


/* =========================================
   OPEN THE CELEBRATION
========================================= */

openButton.addEventListener("click", function () {

    openingScreen.style.transition = "opacity 0.8s ease";
    openingScreen.style.opacity = "0";

    setTimeout(function () {
        openingScreen.style.display = "none";
        mainContent.classList.remove("hidden");
        createBalloons();
        createConfetti();
        animateCounter();
    }, 800);

});


/* =========================================
   CREATE BALLOONS
========================================= */

function createBalloons() {

    const balloonCount = 18;
    const balloonColours = ["#F2B8C6", "#E88CA4", "#C23D6B", "#8A1F4B"];

    for (let i = 0; i < balloonCount; i++) {

        const balloon = document.createElement("div");
        balloon.classList.add("balloon");

        balloon.style.left = Math.random() * 100 + "%";
        balloon.style.background = balloonColours[Math.floor(Math.random() * balloonColours.length)];
        balloon.style.animationDuration = (12 + Math.random() * 6) + "s";
        balloon.style.animationDelay = (Math.random() * 2) + "s";

        celebrationContainer.appendChild(balloon);

        setTimeout(function () { balloon.remove(); }, 20000);

    }

}


/* =========================================
   CREATE CONFETTI
========================================= */

function createConfetti() {

    const confettiCount = 100;
    const confettiColours = ["#FDE9EF", "#F2B8C6", "#E88CA4", "#C23D6B", "#8A1F4B"];

    for (let i = 0; i < confettiCount; i++) {

        const piece = document.createElement("div");
        piece.classList.add("confetti");

        piece.style.left = Math.random() * 100 + "%";
        piece.style.background = confettiColours[Math.floor(Math.random() * confettiColours.length)];
        piece.style.animationDuration = (3 + Math.random() * 4) + "s";
        piece.style.animationDelay = (Math.random() * 2) + "s";
        piece.style.transform = "rotate(" + Math.random() * 360 + "deg)";

        celebrationContainer.appendChild(piece);

        setTimeout(function () { piece.remove(); }, 8000);

    }

}


/* =========================================
   AYAH COUNTER
========================================= */

function animateCounter() {

    const target = 286;
    let current = 0;
    const duration = 1800;
    const startTime = performance.now();

    function updateCounter(currentTime) {

        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        current = Math.floor(progress * target);
        ayahCounter.textContent = current;

        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        } else {
            ayahCounter.textContent = target;
        }

    }

    requestAnimationFrame(updateCounter);

}


/* =========================================
   FINAL SURPRISE
========================================= */

finalButton.addEventListener("click", function () {

    finalMessage.classList.remove("hidden");
    createBalloons();
    createConfetti();
    finalButton.style.display = "none";

});