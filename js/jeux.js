import { isWin } from "./ticTacToe.js";
import { click, enter, leave } from "./ui.js";

function JcJ() {
  const tiles = document.querySelectorAll(".tile");
  const winText = document.querySelector("h1");
  let joueur = "x";
  const moves = [];

  tiles.forEach((tile) => {
    if (!tile.classList.contains("inactive")) {
      tile.addEventListener("mouseenter", () => {
        enter(tile, joueur);
      });

      tile.addEventListener("mouseleave", () => {
        clearInterval(tile._intervalId);
        leave(tile);
      });

      tile.addEventListener("click", () => {
        const x = Number(tile.dataset.x);
        const y = Number(tile.dataset.y);

        // Empêcher double clic sur la même case
        if (tile.classList.contains("inactive")) return;

        click(tile);
        tile.classList.add("inactive"); // bloque la case

        moves.push({ x, y, joueur });

        if (isWin(moves, joueur)) {
          tiles.forEach((tile) => {
            tile.classList.add("inactive");
          });
          winText.style.display = "block";
          winText.classList.add(joueur.toUpperCase());
          winText.textContent = `${joueur.toUpperCase()} WIN !!!!`;
        } else {
          joueur = joueur === "x" ? "o" : "x";
        }
      });
    }
  });
}

JcJ();
