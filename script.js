const gameArea = document.getElementById("gameArea");
const finalMessage = document.getElementById("finalMessage");

const messages = [
  "Pensei em você hoje ❤️",
  "Seu sorriso mora na minha cabeça 😍",
  "Tudo fica melhor quando lembro de você 💭",
  "Meu coração chama pelo seu 💓",
  "Saudade que aperta e abraça 🥰"
];

let clicks = 0;
const maxClicks = messages.length;

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤️";

  heart.style.left = Math.random() * 90 + "%";
  heart.style.animationDuration = (4 + Math.random() * 3) + "s";

  heart.addEventListener("click", () => {
    alert(messages[clicks]);
    clicks++;
    heart.remove();

    if (clicks === maxClicks) {
      finalMessage.classList.remove("hidden");
    }
  });

  gameArea.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 7000);
}

setInterval(createHeart, 1000);
