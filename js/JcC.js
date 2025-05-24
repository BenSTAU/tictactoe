import { isWin } from "./ticTacToe.js";
import { click, click2, enter, leave } from "./ui.js";

function JcJ() {
  const tiles = document.querySelectorAll(".tile");
  const winText = document.querySelector("h1");
  let joueur = "x";
  const moves = [];
  let isPlaying = false;

  tiles.forEach((tile) => {
    tile.addEventListener("click", () => {
      const x = Number(tile.dataset.x);
      const y = Number(tile.dataset.y);

      // Empêcher double clic sur la même case
      if (isPlaying || tile.classList.contains("inactive")) return;

      click(tile);
      tile.classList.add("inactive"); // bloque la case
      moves.push({ x, y, joueur });
      if (isWin(moves, "x")) {
        tiles.forEach((tile) => {
          tile.classList.add("inactive");
        });
        winText.style.display = "block";
        winText.classList.add("X");
        winText.textContent = `X WIN !!!!`;
      }
      isPlaying = true;
      setTimeout(() => {
        playBotMove(moves, winText, isWin, tiles);
        isPlaying = false;
      }, 400);
    });

    if (joueur === "x") {
      tile.addEventListener("mouseenter", () => {
        enter(tile, joueur);
      });

      tile.addEventListener("mouseleave", () => {
        clearInterval(tile._intervalId);
        leave(tile);
      });
    } else {
      return;
    }
  });
}

JcJ();

function findThreatOrWinMove(moves, joueur) {
  const playerMoves = moves.filter((m) => m.joueur === joueur);

  // Cherche dans chaque ligne
  for (let i = 0; i <= 2; i++) {
    const row = playerMoves.filter((m) => m.x === i);
    if (row.length === 2) {
      const yUsed = row.map((m) => Number(m.y));
      for (let y = 0; y <= 2; y++) {
        if (!yUsed.includes(y) && !moves.some((m) => m.x === i && m.y === y)) {
          return { x: i, y };
        }
      }
    }

    const col = playerMoves.filter((m) => m.y === i);
    if (col.length === 2) {
      const xUsed = col.map((m) => Number(m.x));
      for (let x = 0; x <= 2; x++) {
        if (!xUsed.includes(x) && !moves.some((m) => m.x === x && m.y === i)) {
          return { x, y: i };
        }
      }
    }
  }

  // Diagonale ↘ (x === y)
  const diag1 = playerMoves.filter((m) => m.x === m.y);
  if (diag1.length === 2) {
    for (let i = 0; i <= 2; i++) {
      if (
        !diag1.some((m) => m.x === i) &&
        !moves.some((m) => m.x === i && m.y === i)
      ) {
        return { x: i, y: i };
      }
    }
  }

  // Diagonale ↙ (x + y === 2)
  const diag2 = playerMoves.filter((m) => m.x + m.y === 2);
  if (diag2.length === 2) {
    for (let i = 0; i <= 2; i++) {
      const x = i;
      const y = 2 - i;
      if (
        !diag2.some((m) => m.x === x) &&
        !moves.some((m) => m.x === x && m.y === y)
      ) {
        return { x, y };
      }
    }
  }

  return null; // pas de menace ou d'opportunité trouvée
}

function playBotMove(moves, winText, isWin, tiles) {
  let move = findThreatOrWinMove(moves, "o"); // essaie de gagner
  if (!move) move = findThreatOrWinMove(moves, "x"); // sinon bloque

  // Sinon joue aléatoirement
  if (!move) {
    const freeTiles = [];
    for (let x = 0; x <= 2; x++) {
      for (let y = 0; y <= 2; y++) {
        if (!moves.some((m) => m.x === x && m.y === y)) {
          freeTiles.push({ x, y });
        }
      }
    }
    move = freeTiles[Math.floor(Math.random() * freeTiles.length)];
  }

  // Trouver la tuile HTML correspondante
  const tile = document.querySelector(
    `.tile[data-x="${move.x}"][data-y="${move.y}"]`
  );

  if (tile && !tile.classList.contains("inactive")) {
    click2(tile); // effet visuel
    moves.push({ x: move.x, y: move.y, joueur: "o" });
  }
  if (isWin(moves, "o")) {
    winText.style.display = "block";
    winText.classList.add("O");
    winText.textContent = "O WIN !!!!";
    tiles.forEach((t) => t.classList.add("inactive"));
  }
}
