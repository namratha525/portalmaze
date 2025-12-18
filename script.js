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
let breaksLeft = 1;

if (e.shiftKey && maze[newRow][newCol] === '#') {
  maze[newRow][newCol] = '.';
  breaksLeft--;
}
function shortestPathNoBreak() {
  const rows = maze.length;
  const cols = maze[0].length;

  let queue = [];
  let visited = Array.from({ length: rows }, () =>
    Array(cols).fill(false)
  );

  queue.push({ row: 0, col: 0, steps: 0 });
  visited[0][0] = true;

  while (queue.length > 0) {
    let { row, col, steps } = queue.shift();

    if (maze[row][col] === 'G') {
      return steps;
    }

    const directions = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1]
    ];

    for (let [dr, dc] of directions) {
      let nr = row + dr;
      let nc = col + dc;

      if (
        nr >= 0 && nc >= 0 &&
        nr < rows && nc < cols &&
        !visited[nr][nc] &&
        maze[nr][nc] !== '#'
      ) {
        visited[nr][nc] = true;
        queue.push({ row: nr, col: nc, steps: steps + 1 });
      }
    }
  }

  return -1; // no path
}

function shortestPathWithBreak(K) {
  const rows = maze.length;
  const cols = maze[0].length;

  let queue = [];
  let visited = Array.from({ length: rows }, () =>
    Array.from({ length: cols }, () =>
      Array(K + 1).fill(false)
    )
  );

  queue.push({ row: 0, col: 0, breaks: 0, steps: 0 });
  visited[0][0][0] = true;

  while (queue.length > 0) {
    let { row, col, breaks, steps } = queue.shift();

    if (maze[row][col] === 'G') {
      return steps;
    }

    const directions = [
      [1, 0],
      [-1, 0],
      [0, 1],
      [0, -1]
    ];

    for (let [dr, dc] of directions) {
      let nr = row + dr;
      let nc = col + dc;

      if (nr < 0 || nc < 0 || nr >= rows || nc >= cols) continue;

      // Normal move
      if (maze[nr][nc] !== '#' && !visited[nr][nc][breaks]) {
        visited[nr][nc][breaks] = true;
        queue.push({ row: nr, col: nc, breaks, steps: steps + 1 });
      }

      // Break wall
      if (maze[nr][nc] === '#' && breaks < K && !visited[nr][nc][breaks + 1]) {
        visited[nr][nc][breaks + 1] = true;
        queue.push({ row: nr, col: nc, breaks: breaks + 1, steps: steps + 1 });
      }
    }
  }

  return -1;
}
const optimalNoBreak = shortestPathNoBreak();
const optimalWithBreak = shortestPathWithBreak(1);

