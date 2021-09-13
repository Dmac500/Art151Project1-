let song;
function setup() {
  createCanvas(400, 400);
  song = loadSound("music.mp3")
  Plain = new plane(0,10)
  Clouds = []
  for(let i = 0; i < 10; i++){
  Cloud = new cloud()
  Clouds.push(Cloud)
  }
}

function draw() {
  background(0,220,220);
  Plain.update();
  Plain.show();
   for(let i = 0; i < 2; i++){
  Clouds[i].update()
  Clouds[i].show()
   }
}
function mousePressed() {
  if (song.isPlaying()) {
    // .isPlaying() returns a boolean
    song.stop();
  } else {
    song.play();
  }
}

class cloud
  {
    constructor()
    {
      this.x = width
      this.y  = random(height)
      this.size1 = random(15,70)
      this.size2 = random(15,70)
    }
    
     update()
      {
        this.x = this.x-1
        if(this.x == 0){
          this.x = width
          this.y = random(height)
        }
      }
    
      show()
    {
      
      
      fill(250,250,250);
      noStroke() 
      ellipse(this.x, this.y, this.size1, this.size2);
      ellipse(this.x+1, this.y+1, this.size1, this.size2);
      ellipse(this.x+4, this.y+4, this.size1, this.size2);
      ellipse(this.x-10, this.y-10, this.size1, this.size2);
      ellipse(this.x+10, this.y+10, this.size1, this.size2);
      
      
        
    }
    
  }

class plane
  {
      constructor(x,y)
      {
        this.x = 50
        this.y = y
      }
    
      update()
      {
        if(keyCode ==DOWN_ARROW )
          {
            this.y += 1
          }
        else if (keyCode == UP_ARROW)
          {
            this.y -= 1
          }
       if(this.y == 0){
         this.y = width
          }
        else if(this.y == width)
          {
            this.y = 0
          }
      }
    
      show()
    {
      
      fill(0,200,100);
      stroke (0)
      rect(this.x, this.y, 60, 20)
      triangle(this.x+20, this.y, this.x-10, this.y ,this.x , this.y+10)
      triangle(this.x+50, this.y+10, this.x+20, this.y+10 ,this.x , this.y+30)
       
        
    }
    
    
    
  }
  