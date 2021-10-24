class Ant
  {
    constructor(x,y)
    {
      this.pos = createVector(x,y) || createVector(0,0);
      this.dir = 0;
      
    }
    
    update()
    {
      swapColor(floor(this.pos.x), floor(this.pos.y))
      // turn();
      this.move();
      this.turn();
    }
    
    move()
    {
      if(this.dir === 0)
        this.pos.y = (this.pos.y-1 + row)%row;
      else if(this.dir === 1)
        this.pos.x = (this.pos.x+1 + col)%col;
      else if(this.dir === 2)
        this.pos.y = (this.pos.y+1 + row)%row;
      else if(this.dir === 3)
        this.pos.x = (this.pos.x-1 + col)%col;
      
      
    }
    
    turn()
    {
      if(tablica[this.pos.x][this.pos.y] === 0)
        this.dir = (this.dir + 1) % 4
      else if(tablica[this.pos.x][this.pos.y] === 1)
        this.dir = (this.dir - 1 + 4) % 4
    }
    
    show()
    {
      push()
      fill(255,0,0)
      circle((this.pos.x+0.5) *res, (this.pos.y+0.5) *res, res/2)
      pop()
    }
    
  }