// ------------------------
// TYPEWRITER EFFECT (Optional if you want messages under slide)
const text = `Our precious moments together 💖
Laughing, hugging, loving... 
Every memory is my treasure 💕`;

let i = 0;
function typeText() {
  const msg = document.querySelector(".msg");
  if (!msg) return;
  if (i < text.length) {
    msg.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeText, 50);
  }
}
typeText();

// ------------------------
// SLIDESHOW LOGIC
let slides = document.querySelectorAll(".slide");
let currentSlide = 0;

setInterval(() => {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add("active");
}, 3000); // 3s per slide

// ------------------------
// OPTIONAL: floating teddy reacts slightly to hover
const teddy = document.getElementById("teddy");
teddy.addEventListener("mouseover", () => {
  teddy.style.transform = "scale(1.05)";
});
teddy.addEventListener("mouseout", () => {
  teddy.style.transform = "scale(1)";
});
