let player = -1;
let cpu = -1;
let contPlayer = 0;
let contCpu = 0;

const arrayImg = [
  "./images/icons8-roca-80.png",
  "./images/icons8-papel-48.png",
  "./images/icons8-scissors-64.png",
];

function setImagePlayer(idElement, position) {
  const imgPlayer = document.getElementById(idElement);
  imgPlayer.src = arrayImg[position];
}
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
function gameCpu() {
  cpu = getRandomInt(3);
  setImagePlayer(`cpu-opt-img`, cpu);
  winner();
}

function gamePlayer(opt) {
  player = opt;
  setImagePlayer(`player-opt-img`, opt);
  gameCpu();
}

function winner() {
  const impResult = document.getElementById(`result-winner`);
  if (
    (player === 0 && cpu === 0) ||
    (player === 1 && cpu === 1) ||
    (player === 2 && cpu === 2)
  ) {
    impResult.innerHTML = `Empate`;
  } else if (player === 0 && cpu === 1) {
    impResult.innerHTML = `Cpu`;
    impContadorCpu();
  } else if (player === 0 && cpu === 2) {
    impResult.innerHTML = `Player`;
    impContadorPlayer();
  } else if (player === 1 && cpu === 0) {
    impResult.innerHTML = `Player`;
    impContadorPlayer();
  } else if (player === 1 && cpu === 2) {
    impResult.innerHTML = `Cpu`;
    impContadorCpu();
  } else if (player === 2 && cpu === 0) {
    impResult.innerHTML = `Cpu`;
    impContadorCpu();
  } else if (player === 2 && cpu === 1) {
    impResult.innerHTML = `Player`;
    impContadorPlayer();
  } else {
    impResult.innerHTML = ` error de comparacion`;
  }
}

function impContadorCpu() {
  const impCpu = document.getElementById(`cont-cpu`);
  contCpu++;
  impCpu.innerHTML = contCpu;
}

function impContadorPlayer() {
  const impPlayer = document.getElementById(`cont-player`);
  contPlayer++;
  impPlayer.innerHTML = contPlayer;
}
