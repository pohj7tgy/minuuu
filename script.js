/* =========================
   YES BUTTON NAVIGATION
========================= */
function goYes() {
  window.location.href = "letter.html";
}

/* =========================
   NO BUTTON ESCAPE
========================= */
const noBtn = document.getElementById("noBtn");

if (noBtn) {
  noBtn.addEventListener("mouseover", moveNo);
  noBtn.addEventListener("touchstart", moveNo);
}

function moveNo() {
  const x = Math.random() * 220 - 110;
  const y = Math.random() * 140 - 70;
  noBtn.style.transform = `translate(${x}px, ${y}px)`;
}

/* =========================
   TYPEWRITER EFFECT
========================= */
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

/* =========================
   SLIDESHOW
========================= */
const slides = document.querySelectorAll(".slide");
let current = 0;

if (slides.length > 1) {
  slides[0].classList.add("active");
  setInterval(() => {
    slides[current].classList.remove("active");
    current = (current + 1) % slides.length;
    slides[current].classList.add("active");
  }, 3000);
}

/* =========================
   HEART BEAT (FOREVER PAGE)
========================= */
function feelHeart() {
  const teddy = document.getElementById("heartTeddy");
  const msg = document.getElementById("heartMsg");

  if (teddy) {
    teddy.classList.remove("beat");
    void teddy.offsetWidth; // restart animation
    teddy.classList.add("beat");
  }

  if (msg) {
    msg.innerText = "💓 Lub-dub… Lub-dub… this heart beats only for you 💖";
  }
}
