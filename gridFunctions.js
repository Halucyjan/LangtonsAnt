function make2dArray(cols, rows) {
  var tab = new Array(cols);
  for (var i = 0; i < cols; i++)
    tab[i] = new Array(rows);
  return tab;
}

function fillGrid(cols, rows, resolution) {
  var x, y;
  for (var i = 0; i < col; i++)
    for (var j = 0; j < row; j++) {
      x = i * resolution
      y = j * resolution
      if (tablica[i][j] === 0) {
        stroke(0)
        fill(255);
      }
      if (tablica[i][j] === 1) {
        stroke(255)
        fill(0);
      }
      rect(x, y, resolution, resolution);
    }
}
