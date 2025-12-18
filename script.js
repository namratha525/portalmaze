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

