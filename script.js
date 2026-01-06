const startScreen = document.getElementById("startScreen");
const gameScreen = document.getElementById("gameScreen");
const finalScreen = document.getElementById("finalScreen");

const messages = [
  "Pensei em você 💭",
  "Seu sorriso me acalma 😍",
  "Meu coração sente sua falta 💓",
  "Tudo em mim chama por você 🫶",
  "Essa saudade tem nome ❤️"
];

let collected = 0;
const total = messages.length;

// Iniciar jogo
startScreen.addEventListener("click", () => {
  startScreen.classList.remove("active");
  gameScreen.classList.add("active");
  spawnHearts();
});

// Criar corações
function spawnHearts() {
  const interval = setInterval(() => {
    if (collected >= total) {
      clearInterval(interval);
      setTimeout(showFinal, 1500);
      return;
    }

    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "❤️";

    heart.style.left = Math.random() * 80 + "vw";

    heart.addEventListener("click", () => {
      showMessage(messages[collected]);
      collected++;
      heart.remove();
    });

    gameScreen.appendChild(heart);

    setTimeout(() => heart.remove(), 6500);
  }, 900);
}

// Mostrar mensagem suave
function showMessage(text) {
  const msg = document.createElement("div");
  msg.innerText = text;
  msg.style.position = "absolute";
  msg.style.bottom = "20%";
  msg.style.fontSize = "1.2em";
  msg.style.opacity = "0";
  msg.style.transition = "opacity 1s";

  gameScreen.appendChild(msg);

  setTimeout(() => msg.style.opacity = "1", 100);
  setTimeout(() => msg.remove(), 2500);
}

// Tela final
function showFinal() {
  gameScreen.classList.remove("active");
  finalScreen.classList.add("active");
}
