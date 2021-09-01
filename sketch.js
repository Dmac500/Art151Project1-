let tree
function setup() {
  createCanvas(800, 500);
  background(0, 0, 200);
  tree = new Tree(300,299,50,100)
}

var x = 175
function draw() {
  //background(220, 0, 200);
  
  
  fill(0,0,0)
  
  rect(x, 280, 25, 80, 100, 100);
  fill(100,0,0)
  rect(170, 350, 10, 50,5);
  fill(100,0,0)
  rect(195, 350, 10, 50,5);
  
  fill(100,0,0)
  rect(155, 310, 20, 10,5);
  
  fill(100,0,0)
  rect(200, 310, 20, 10,5);
  
  fill(0,0,0)
  circle(189,275,45)
  //sun 
  fill(225,200,0)
  circle(751,85,80)
  
   
  //house
  fill(180,225,150)
  rect(500,220,200,200)
   fill(0,225,150)
  rect(520,280,50,50)
  tree.make()
   fill(20,225,150)
  rect(610,295,50,110)
  
  fill(100,1,250)
  triangle(500,220,700,220,600,90)
  
  fill(225,225,0)
  circle(620,350,10)
  strokeWeight(5)
  line(545,280,545,330)
  line(520,305,570,305)
  line(565,220,600,90)
  line(640,220,600,90)
  line(600,220,600,90)
  line(555,150,645,150)
  line(530,180,667,180)
  line(515,200,680,200)
  fill(0,150,150);
  //ground
  rect(0,400,800,100);
  tree.make()
  
}
class Tree
  {
    constructor(x,y,width,height)
    {
      this.x =x;
      this.y = y;
      this.width= width;
      this.height= height 
    }
  
    make()
    {
      fill(225,220,225)
      rect(this.x,this.y,this.width,this.height)
      this.leaves()
     console.log('this is being called')
      
     
    }

    leaves()
    {
      fill(0,225,225)
      circle(this.x+25,this.y,100)
    }
  }