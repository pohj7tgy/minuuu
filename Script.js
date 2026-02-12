// Typing letter
const text = `From the day I met you,
my heart stopped searching…

You became my calm,
my smile,
my forever 💕

I don’t need perfect moments,
I just need YOU in all of them 💖`;

let i = 0;
const speed = 50;
const target = document.getElementById("typeText");

if (target) {
  function type() {
    if (i < text.length) {
      target.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}

// Slideshow
let slides = document.querySelectorAll(".slide");
let index = 0;

if (slides.length > 0) {
  setInterval(() => {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
  }, 3000);
}
