/* YES BUTTON */
function goYes() {
  window.location.href = "letter.html";
}

/* NO BUTTON ESCAPE */
const noBtn = document.getElementById("noBtn");

if (noBtn) {
  noBtn.addEventListener("mouseover", moveNo);
  noBtn.addEventListener("touchstart", moveNo);
}

function moveNo() {
  const x = Math.random() * 200 - 100;
  const y = Math.random() * 120 - 60;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

/* TYPEWRITER (LETTER PAGE) */
const letter = document.getElementById("letterText");
const text = `From the day I met you,
my heart stopped searching…

I choose you.
Always. 💖`;

let i = 0;
if (letter) {
  function type() {
    if (i < text.length) {
      letter.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, 50);
    }
  }
  type();
}

/* SLIDESHOW */
const slides = document.querySelectorAll(".slide");
let current = 0;

if (slides.length) {
  setInterval(() => {
    slides[current].classList.remove("active");
    current = (current + 1) % slides.length;
    slides[current].classList.add("active");
  }, 3000);
}

/* HEART BEAT BUTTON */
function feelHeart() {
  const teddy = document.getElementById("heartTeddy");
  if (!teddy) return;

  teddy.classList.remove("beat");
  void teddy.offsetWidth; // restart animation
  teddy.classList.add("beat");
}
