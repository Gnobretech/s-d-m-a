const startScreen = document.getElementById("startScreen");
const gameScreen = document.getElementById("gameScreen");
const finalScreen = document.getElementById("finalScreen");

const thoughts = [
  "Tem dias que você cruza minha cabeça do nada",
  "Algumas coisas lembram você",
  "Não é drama, é ausência",
  "Faz falta mais do que eu admito",
  "O silêncio entrega",
  "Tem gente que deixa marca",
  "Você é uma delas"
];

let collected = 0;
const total = thoughts.length;

startScreen.addEventListener("click", () => {
  startScreen.classList.remove("active");
  gameScreen.classList.add("active");
  spawnHearts();
});

function spawnHearts() {
  const interval = setInterval(() => {
    if (collected >= total) {
      clearInterval(interval);
      setTimeout(showFinal, 1200);
      return;
    }

    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";
    heart.style.left = Math.random() * 80 + "vw";

    heart.addEventListener("click", (e) => {
      spawnThought(e.clientX, e.clientY, thoughts[collected]);
      collected++;
      heart.remove();
    });

    gameScreen.appendChild(heart);
    setTimeout(() => heart.remove(), 6500);
  }, 900);
}

function spawnThought(x, y, text) {
  const thought = document.createElement("div");
  thought.classList.add("thought");
  thought.innerText = text;

  thought.style.left = x - 60 + "px";
  thought.style.top = y - 20 + "px";

  gameScreen.appendChild(thought);

  setTimeout(() => thought.remove(), 3000);
}

function showFinal() {
  gameScreen.classList.remove("active");
  finalScreen.classList.add("active");
}
