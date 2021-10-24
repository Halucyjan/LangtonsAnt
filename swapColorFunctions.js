function getColumn(x)
{
  for (var i = 0; i < col; i++)
    if(x >= i * res && x < (i+1) * res)
  return i;
  
  return "error"
}

function getRow(y)
{
  for (var i = 0; i < row; i++)
    if(y >= i * res && y < (i+1) * res)
  return i;
  
  return "error"
}

function mousePressed()
{
  swapColor(getColumn(mouseX),getRow(mouseY));
}

function mouseDragged()
{
  // var x = getColumn(mouseX);
  // var y = getRow(mouseY);
  swapColor(getColumn(mouseX),getRow(mouseY));
}

function swapColor(x,y)
{
  if(tablica[x][y] === 1)
    tablica[x][y] = 0;
  else if(tablica[x][y] === 0)
    tablica[x][y] = 1;
}