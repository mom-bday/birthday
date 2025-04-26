// PASSWORD PROTECTION
const correctPassword = "bestmom"; // Change this to your desired password

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("unlock-btn").addEventListener("click", function () {
        let input = document.getElementById("password-input").value;
        let errorMsg = document.getElementById("error-message");

        console.log("Entered Password:", input); // Debugging log

        if (input === correctPassword) {
            console.log("Password is correct! Unlocking..."); // Debugging log
            
            // Hide the password screen
            document.getElementById("password-screen").style.display = "none";

            // Ensure main content is displayed properly
            let content = document.getElementById("content");
            content.style.display = "block"; // Ensure content is visible
            content.style.opacity = "1"; // Ensure it's fully visible

            // Start floating hearts animation
            startHearts();
        } else {
            console.log("Incorrect password"); // Debugging log
            errorMsg.textContent = "Incorrect password. Try again!";
            errorMsg.style.color = "red";
        }
    });
});

// ANIMATED REVEAL ON SCROLL
document.addEventListener("scroll", () => {
    let cards = document.querySelectorAll(".card");
    let triggerBottom = window.innerHeight * 0.8;

    cards.forEach(card => {
        let cardTop = card.getBoundingClientRect().top;
        if (cardTop < triggerBottom) {
            card.classList.add("show");
        }
    });
});

// SMOOTH SCROLL ON BUTTON CLICK
document.getElementById("start-btn").addEventListener("click", () => {
    window.scrollTo({ top: window.innerHeight, behavior: "smooth" });
});

// HEART ANIMATION (Appears only after unlocking)
function startHearts() {
    function createHeart() {
        const heart = document.createElement("div");
        heart.classList.add("heart");
        heart.innerHTML = "❤️"; // Customize if needed
        document.body.appendChild(heart);

        // Random position
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.animationDuration = Math.random() * 3 + 2 + "s"; // 2s to 5s

        // Remove heart after animation
        setTimeout(() => {
            heart.remove();
        }, 5000);
    }

    // Generate hearts every 500ms after unlocking
    setInterval(createHeart, 500);
}
    
