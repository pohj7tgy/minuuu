/* ======================
   YES BUTTON
====================== */
function goYes() {
  window.location.href = "letter.html";
}

/* ======================
   NO BUTTON ESCAPE
====================== */
const noBtn = document.getElementById("noBtn");

if (noBtn) {
  noBtn.addEventListener("mouseover", moveNo);
  noBtn.addEventListener("touchstart", moveNo);
}

function moveNo() {
  const box = noBtn.parentElement;

  const maxX = box.clientWidth - noBtn.offsetWidth;
  const maxY = box.clientHeight - noBtn.offsetHeight;

  const x = Math.random() * maxX;
  const y = Math.random() * maxY;

  noBtn.style.left = x + "px";
  noBtn.style.top = y + "px";
}

/* ======================
   TYPEWRITER (LETTER PAGE)
====================== */
const letter = document.getElementById("letterText");

const text = `From the day I met you,
my heart stopped searching…

I choose you.
Always. 💖`;

let i = 0;

if (letter) {
  letter.innerHTML = "";
  function type() {
    if (i < text.length) {
      letter.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, 50);
    }
  }
  type();
}

/* ======================
   SLIDESHOW (MEMORIES)
====================== */
const slides = document.querySelectorAll(".slide");
let current = 0;

if (slides.length > 0) {
  slides[0].classList.add("active");

  setInterval(() => {
    slides[current].classList.remove("active");
    current = (current + 1) % slides.length;
    slides[current].classList.add("active");
  }, 3000);
}

/* ======================
   HEART BEAT BUTTON
====================== */
function feelHeart() {
  const teddy = document.getElementById("heartTeddy");
  if (!teddy) return;

  teddy.classList.remove("beat");
  void teddy.offsetWidth; // force restart
  teddy.classList.add("beat");
}
