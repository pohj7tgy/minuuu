/* TYPEWRITER */
const text = `From the day I met you,
my heart stopped searching.

Every smile of yours,
every moment with you,
feels like magic.

I don’t want perfection,
I just want YOU.
Forever 💖`;

let i = 0;
function typeText(){
  if(i < text.length){
    document.getElementById("typeText").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeText, 45);
  }
}
if(document.getElementById("typeText")) typeText();

/* SLIDESHOW */
let slides = document.querySelectorAll(".slide");
let current = 0;

setInterval(()=>{
  slides[current].classList.remove("active");
  current = (current + 1) % slides.length;
  slides[current].classList.add("active");
}, 3000);
