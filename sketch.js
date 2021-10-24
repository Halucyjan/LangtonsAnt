
var tablica,col,row;
var res = 10;
var mrowka;
///////////////////
//main functions
////////////////

function setup() {
  createCanvas(400, 400);
  
  col = width/res;
  row = height/res;
  tablica = make2dArray(col, row)
  for (var i = 0; i < col; i++)
    for (var j = 0; j < row; j++)
      tablica[i][j] = 0;
  
  mrowka = new Ant(floor(col/2) , floor(row/2))
}

function draw() {
  background(220);
  fillGrid(col, row, res)
  
  mrowka.show();
  mrowka.update();
}