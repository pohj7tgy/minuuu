/* NO BUTTON ESCAPE */
const noBtn = document.getElementById("noBtn");
if (noBtn) {
  noBtn.addEventListener("mouseover", moveNo);
  noBtn.addEventListener("touchstart", moveNo);
}
function moveNo() {
  noBtn.style.left = Math.random()*70 + "vw";
  noBtn.style.top = Math.random()*70 + "vh";
}

/* SLIDESHOW */
let slides = document.querySelectorAll(".slide");
let index = 0;
if (slides.length > 0) {
  setInterval(() => {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
  }, 3000);
}

/* MUSIC REACTIVE TEDDY */
const audio = document.getElementById("music");
const teddy = document.getElementById("teddy");

if (audio && teddy) {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  const ctx = new AudioContext();
  const analyser = ctx.createAnalyser();
  const source = ctx.createMediaElementSource(audio);
  source.connect(analyser);
  analyser.connect(ctx.destination);
  analyser.fftSize = 256;

  const data = new Uint8Array(analyser.frequencyBinCount);

  document.body.addEventListener("click", () => {
    if (ctx.state === "suspended") ctx.resume();
    audio.play();
  });

  function beat() {
    analyser.getByteFrequencyData(data);
    let avg = data.reduce((a,b)=>a+b)/data.length;
    teddy.style.transform = avg > 70 ? "scale(1.15)" : "scale(1)";
    requestAnimationFrame(beat);
  }
  beat();
                          }
