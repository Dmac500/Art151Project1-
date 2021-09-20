// let song;
// function setup() {
//   createCanvas(400, 400);
//  song = loadSound("assets/music.mp3")
//   Plain = new plane(0,10)
//   Clouds = []
//   for(let i = 0; i < 10; i++){
//   Cloud = new cloud()
//   Clouds.push(Cloud)
//   }
//   //song.play();
// }

// function draw() {
//   background(0,220,220);
//   Plain.update();
//   Plain.show();
//    for(let i = 0; i < 2; i++){
//   Clouds[i].update()
//   Clouds[i].show()
//    }
// }
// // function mousePressed() {
// //  if (song.isPlaying()) {
// //     // .isPlaying() returns a boolean
// //    song.stop();
// //   } else {
// //     song.play();
// //   }
// // }

// class cloud
//   {
//     constructor()
//     {
//       this.x = width
//       this.y  = random(height)
//       this.size1 = random(15,70)
//       this.size2 = random(15,70)
//     }
    
//      update()
//       {
//         this.x = this.x-1
//         if(this.x == 0){
//           this.x = width
//           this.y = random(height)
//         }
//       }
    
//       show()
//     {
      
      
//       fill(250,250,250);
//       noStroke() 
//       ellipse(this.x, this.y, this.size1, this.size2);
//       ellipse(this.x+1, this.y+1, this.size1, this.size2);
//       ellipse(this.x+4, this.y+4, this.size1, this.size2);
//       ellipse(this.x-10, this.y-10, this.size1, this.size2);
//       ellipse(this.x+10, this.y+10, this.size1, this.size2);
      
      
        
//     }
    
//   }

// class plane
//   {
//       constructor(x,y)
//       {
//         this.x = 50
//         this.y = y
//       }
    
//       update()
//       {
//         if(keyCode ==DOWN_ARROW )
//           {
//             this.y += 1
//           }
//         else if (keyCode == UP_ARROW)
//           {
//             this.y -= 1
//           }
//        if(this.y == 0){
//          this.y = width
//           }
//         else if(this.y == width)
//           {
//             this.y = 0
//           }
//       }
    
//       show()
//     {
      
//       fill(0,200,100);
//       stroke (0)
//       rect(this.x, this.y, 60, 20)
//       triangle(this.x+20, this.y, this.x-10, this.y ,this.x , this.y+10)
//       triangle(this.x+50, this.y+10, this.x+20, this.y+10 ,this.x , this.y+30)
       
        
//     }
    
    
    
function setup() {
  createCanvas(1050, 750);
   Grid = new grid(50,50)
   arry = Grid.build()
   
  }
 function draw(){
  
  if (mouseIsPressed)
  {
   arry = Grid.update2()
  }
 }

 class grid 
 {
    constructor(x,y)
    {
      this.x = x;
     this.y = y;
     this.arr = [];
      
    }
  build() {
     
     for(let i = 0; i < height; i += this.y)
     { 
       for(let j = 0; j < width; j += this.x)
      {
       fill(random(0,225),random(100,225),random(180,255))
       stroke(0)
       //rect(j,i,this.x,this.y)
       this.arr.push(rect(j,i,this.x,this.y))
      }
     }
     return this.arr
   }
   
   update()
   {
      for(let i = 0; i < height; i += this.y)
     { 
       for(let j = 0; j < width; j += this.x)
      {
       fill(random(0,225),random(0,225),random(0,255))
       stroke(0)
       //rect(j,i,this.x,this.y)
       this.arr.push(rect(j,i,this.x,this.y))
      }
     }
     return this.arr
   }

  update2()
   {
        
       fill(0,0,0)
       stroke(0)
       rect(random(0,width),random(0,height),this.x,this.y)
     //this.arr[random(0,arr.length)] = rect(0,0,this.x,this.y) ;
     
     return this.arr
   }


   


  }