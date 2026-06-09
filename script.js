// --- 1. TERMINAL TYPEWRITER LOOP ---
const words = ["Software Programming.", "UI/UX Design.", "Full-Stack Development."];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const target = document.getElementById("typewriter");
  if (!target) return;
  
  const currentWord = words[wordIndex];
  
  if (isDeleting) {
    target.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
  } else {
    target.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;
  }

  let speed = isDeleting ? 40 : 80;

  if (!isDeleting && charIndex === currentWord.length) {
    speed = 1500; 
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    speed = 400; 
  }

  setTimeout(type, speed);
}

// --- 2. LIVE TIME-BASED GREETING ---
function setDynamicGreeting() {
  const greetingElement = document.querySelector(".eyebrow");
  if (!greetingElement) return;

  const hours = new Date().getHours();
  let greetingText = "Hello";

  if (hours < 12) {
    greetingText = "Good morning";
  } else if (hours < 18) {
    greetingText = "Good afternoon";
  } else {
    greetingText = "Good evening";
  }

  greetingElement.textContent = `${greetingText}, I'm`;
}

// --- LOAD FUNCTIONS INSTANTLY ---
document.addEventListener("DOMContentLoaded", () => {
  type();
  setDynamicGreeting();
});
