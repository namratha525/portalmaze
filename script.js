const maze = [
  ['S', '.', '#', '.','G'],
  ['#', '.', '#', '.','.'],
  ['.', '.', '.', '#','.'],
  ['.', '#', '.', '.','.'],
  ['.', '.', '.', '#','.']
];

const mazeDiv = document.getElementById("maze");

maze.forEach(row => {
  row.forEach(cell => {
    const div = document.createElement("div");
    div.className = "cell";
    div.innerText = cell;
    mazeDiv.appendChild(div);
  });
});
let playerRow = 0;
let playerCol = 0;
document.addEventListener("keydown", movePlayer);

function movePlayer(e) {
  console.log(e.key);
}
function movePlayer(e) {
  let newRow = playerRow;
  let newCol = playerCol;

  if (e.key === "ArrowUp") newRow--;
  if (e.key === "ArrowDown") newRow++;
  if (e.key === "ArrowLeft") newCol--;
  if (e.key === "ArrowRight") newCol++;

  if (maze[newRow][newCol] !== '#') {
    playerRow = newRow;
    playerCol = newCol;
  }
}
'R' // red portal
if (maze[playerRow][playerCol] === 'R') {

  // current portal position
  const currentRow = playerRow;
  const currentCol = playerCol;

  // find the OTHER red portal
  redPortals.forEach(portal => {
    if (portal.row !== currentRow || portal.col !== currentCol) {
      playerRow = portal.row;
      playerCol = portal.col;
    }
  });
}


