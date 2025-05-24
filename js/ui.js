// Index
export function enterIndex(tile, color) {
  tile.style.boxShadow =
    "1px 1px 0px 0px color, 2px 2px 0px 0px color, 3px 3px 0px 0px color, 4px 4px 0px 0px color, 5px 5px 0px 0px color, 6px 6px 0px 0px color, 7px 7px 0px 0px color, 8px 8px 0px 0px color, 9px 9px 0px 0px color, 10px 10px 0px 0px color ";
  tile.style.transform = "translate(-10px, -10px)";
}

export function leaveIndex(tile, color) {
  tile.style.boxShadow = "1px 1px 0px 0px color,2px 2px 0px 0px color";
  tile.style.transform = "";
}

// Jeux
export function enter(tile, joueurSymbol) {
  if (tile.classList.contains("inactive")) return;
  tile.style.boxShadow =
    "1px 1px 0px 0px var(--color-underline-second), 2px 2px 0px 0px var(--color-underline-second), 3px 3px 0px 0px var(--color-underline-second), 4px 4px 0px 0px var(--color-underline-second), 5px 5px 0px 0px var(--color-underline-second), 6px 6px 0px 0px var(--color-underline-second), 7px 7px 0px 0px var(--color-underline-second), 8px 8px 0px 0px var(--color-underline-second), 9px 9px 0px 0px var(--color-underline-second), 10px 10px 0px 0px var(--color-underline-second) ";
  tile.style.backgroundColor = "#cededa";
  tile.style.transform = "translate(-8px, -8px)";
  if (joueurSymbol === "x") tile.style.color = "#FA9775";
  if (joueurSymbol === "o") tile.style.color = "#fac475";

  tile.textContent = joueurSymbol;
}

export function leave(tile) {
  if (tile.classList.contains("inactive")) return;

  tile.style.boxShadow =
    "1px 1px 0px 0px var(--color-underline-second),2px 2px 0px 0px var(--color-underline-second)";
  tile.style.backgroundColor = "#dbe7e4";
  tile.style.transform = "";
  tile.textContent = "";
}

export function click(tile) {
  tile.style.transform = "";
  tile.style.boxShadow =
    "inset 1px 1px 0px 0px var(--color-underline-second),inset 2px 2px 0px 0px var(--color-underline-second),inset 3px 3px 0px 0px var(--color-underline-second)";

  tile.style.backgroundColor = "#dbe7e4";
  tile.classList.add("inactive");
}

export function click2(tile) {
  tile.style.transform = "";
  tile.style.boxShadow =
    "inset 1px 1px 0px 0px var(--color-underline-second),inset 2px 2px 0px 0px var(--color-underline-second),inset 3px 3px 0px 0px var(--color-underline-second)";

  tile.style.backgroundColor = "#dbe7e4";
  tile.classList.add("inactive");

  tile.style.color = "#fac475";
  tile.textContent = "o";
}
