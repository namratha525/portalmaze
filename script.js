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
