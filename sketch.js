var rows, cols;
var w = 40;
var grid = [];

var current;

var stack = [];

function setup() {
  createCanvas(400, 400);
  cols = floor(width / w);
  rows = floor(height / w);

  frameRate(5);

  for (var j = 0; j < rows; j++) {
    for (var i = 0; i < cols; i++) {
      var cell = new Cell(i, j);
      grid.push(cell);
    }
  }

  current = grid[0];
}

function draw() {
  background(51);
  for (var i = 0; i < grid.length; i++) {
    grid[i].show();
  }

  current.visited = true;
  current.highlight();
  // Step 1
  var next = current.checkNeighbors();
  if (next) {
    next.visited = true;
    // Step 2
    stack.push(current);
    // Step 3
    removeWalls(current, next);

    // Step 4
    current = next;
  } else if (stack.length > 0) {
    current = stack.pop();
  }
}
