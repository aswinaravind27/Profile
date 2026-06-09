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

document.addEventListener("DOMContentLoaded", type);
