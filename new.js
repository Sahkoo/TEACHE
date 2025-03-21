const gridSize = 10;
let cat = { x: 0, y: 0 };
let andriy = { x: 5, y: 5 };

document.addEventListener("DOMContentLoaded", () => {
  const grid = document.getElementById("grid");
  const buttons = {
    up: document.getElementById("up"),
    down: document.getElementById("down"),
    left: document.getElementById("left"),
    right: document.getElementById("right"),
  };

  function moveAndriy() {
    andriy.x = (andriy.x + (Math.random() > 0.5 ? 1 : -1) + gridSize) % gridSize;
    andriy.y = (andriy.y + (Math.random() > 0.5 ? 1 : -1) + gridSize) % gridSize;
    renderGrid();
  }

  function moveCat(dx, dy) {
    cat.x = (cat.x + dx + gridSize) % gridSize;
    cat.y = (cat.y + dy + gridSize) % gridSize;
    if (cat.x === andriy.x && cat.y === andriy.y) {
      alert("Ви зловили Андрія!");
      cat = { x: 0, y: 0 };
      andriy = { x: 5, y: 5 };
    }
    renderGrid();
  }

  function renderGrid() {
    grid.innerHTML = "";
    for (let y = 0; y < gridSize; y++) {
      for (let x = 0; x < gridSize; x++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        if (x === cat.x && y === cat.y) cell.classList.add("cat");
        if (x === andriy.x && y === andriy.y) {
          cell.classList.add("andriy");
          const img = document.createElement("img");
          img.src = "./img/photo_2025-03-21_16-24-49 (2).jpg";
          img.alt = "Андрій";
          img.classList.add("andriy-img");
          cell.appendChild(img);
        }
        grid.appendChild(cell);
      }
    }
  }

  buttons.up.addEventListener("click", () => moveCat(0, -1));
  buttons.down.addEventListener("click", () => moveCat(0, 1));
  buttons.left.addEventListener("click", () => moveCat(-1, 0));
  buttons.right.addEventListener("click", () => moveCat(1, 0));

  setInterval(moveAndriy, 1000);
  renderGrid();
});
