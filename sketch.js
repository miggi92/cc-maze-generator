var rows, cols;
var w = 40;
var grid = [];

function setup() {
    createCanvas(400, 400);
    cols = floor(width/w);
    rows = floor(height/w);

    for (var j = 0; j < rows; j++){
      for (var i = 0; i < cols; i++){
        var cell = new Cell(i,j);
        grid.push(cell);
      }
    }
}

function draw() {
    background(51);
    for (var i = 0; i < grid.length; i++){
      grid[i].show();
    }
}
