@import url('https://fonts.googleapis.com/css2?family=Pacifico&family=Poppins:wght@300;400;600&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-tap-highlight-color: transparent;
}

body {
  font-family: 'Poppins', sans-serif;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background: linear-gradient(160deg, #ff758c, #ff7eb3);
  color: #fff;
}

.screen {
  position: absolute;
  inset: 0;
  display: none;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
  padding: 20px;
}

.screen.active {
  display: flex;
}

h1, h2 {
  font-family: 'Pacifico', cursive;
  margin-bottom: 15px;
}

#startScreen p {
  opacity: 0.8;
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0%, 100% { opacity: 0.4; }
  50% { opacity: 1; }
}

#hint {
  position: absolute;
  top: 20px;
  font-size: 0.9em;
  opacity: 0.8;
}

.heart {
  position: absolute;
  font-size: 2.5em;
  animation: floatUp 6s linear forwards;
}

@keyframes floatUp {
  from {
    transform: translateY(100vh) scale(0.8);
    opacity: 0;
  }
  to {
    transform: translateY(-20vh) scale(1.2);
    opacity: 1;
  }
}

#finalScreen p {
  font-size: 1.1em;
  line-height: 1.6;
  animation: fadeIn 2s ease forwards;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
