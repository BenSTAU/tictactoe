export function isWin(moves, joueur) {
  const playerMoves = moves.filter((m) => m.joueur === joueur);

  for (let i = 0; i <= 2; i++) {
    if (playerMoves.filter((m) => m.x === i).length === 3) return true;
    if (playerMoves.filter((m) => m.y === i).length === 3) return true;
  }

  if (playerMoves.filter((m) => m.x === m.y).length === 3) return true;
  if (playerMoves.filter((m) => m.x + m.y === 2).length === 3) return true;

  return false;
}
export function allTilesInactive(tiles) {
  return Array.from(tiles).every((tile) => tile.classList.contains("inactive"));
}