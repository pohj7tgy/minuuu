/* NO BUTTON ESCAPE */
const noBtn = document.getElementById("noBtn");
if (noBtn) {
  noBtn.addEventListener("mouseover", moveNo);
  noBtn.addEventListener("touchstart", moveNo);
}

function moveNo() {
  const box = document.querySelector(".button-box");
  const maxX = box.clientWidth - noBtn.offsetWidth;
  const maxY = box.clientHeight - noBtn.offsetHeight;
  noBtn.style.left = Math.random() * maxX + "px";
  noBtn.style.top = Math.random() * maxY + "px";
}

function goYes() {
  window.location.href = "letter.html";
}

/* TYPEWRITER TEXT */
const text = `From the day I met you,
my heart stopped searching…

I choose you.
Always. 💖`;

const letter = document.getElementById("letterText");
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

/* HEARTBEAT BUTTON */
function heartbeat() {
  document.getElementById("heartMsg").innerText =
    "💓 Lub-dub… Lub-dub… this heart beats only for you 💖";
}
