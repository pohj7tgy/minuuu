/* TYPEWRITER EFFECT */
const el = document.getElementById("typeText");
if (el) {
  const text = el.dataset.text;
  let i = 0;
  function type() {
    if (i < text.length) {
      el.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, 45);
    }
  }
  type();
}

/* NO BUTTON ESCAPE */
const noBtn = document.getElementById("noBtn");
if (noBtn) {
  noBtn.addEventListener("mouseover", moveNo);
  noBtn.addEventListener("touchstart", moveNo);
}
function moveNo() {
  noBtn.style.left = Math.random() * 70 + "vw";
  noBtn.style.top = Math.random() * 70 + "vh";
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

/* MUSIC + TEDDY REACT */
const audio = document.getElementById("music");
const teddy = document.getElementById("teddy");
const startBtn = document.getElementById("startMusic");

if (audio && teddy && startBtn) {
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  const ctx = new AudioContext();
  const analyser = ctx.createAnalyser();
  const source = ctx.createMediaElementSource(audio);

  source.connect(analyser);
  analyser.connect(ctx.destination);
  analyser.fftSize = 256;

  const data = new Uint8Array(analyser.frequencyBinCount);

  startBtn.addEventListener("click", () => {
    ctx.resume();
    audio.play();
    startBtn.style.display = "none";
    animate();
  });

  function animate() {
    analyser.getByteFrequencyData(data);
    let avg = data.reduce((a,b)=>a+b) / data.length;
    if (avg > 70) {
      teddy.style.transform = "scale(1.18)";
      teddy.style.filter = "drop-shadow(0 0 50px #ff4da6)";
    } else {
      teddy.style.transform = "scale(1)";
      teddy.style.filter = "drop-shadow(0 0 30px pink)";
    }
    requestAnimationFrame(animate);
  }
        }
