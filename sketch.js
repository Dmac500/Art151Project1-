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
  createCanvas(windowWidth, windowHeight);
   Grid = new grid(30,30)
   arry = Grid.build() 
   alert("Just click the screen and draw. up key is to clear your image , down to reset the background and anyother key will let you draw again!!! ");
  
   
  }
 function draw(){
  
  if (mouseIsPressed)
  {
   arry = Grid.update()

   //rect(mouseX,mouseY,this.x,this.y)
  }

  if(keyCode === UP_ARROW )
  {
     arry = Grid.build2() 
    
  } 
  if(keyCode === DOWN_ARROW )
  {
     arry = Grid.build() 
    
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
       //fill(random(180,225),random(180,225),random(180,225))
      for(let j = 0; j < width; j += this.x)
      {
       fill(0,0,0) // black 
      // fill("white") //white
       stroke(0)
       //rect(j,i,this.x,this.y)
       this.arr.push(rect(j,i,this.x,this.y))
      }
     }
     return this.arr
   }
   build2() {
     
     for(let i = 0; i < height; i += this.y)
     { 
        fill(random(225),random(225),random(225)) 
       for(let j = 0; j < width; j += this.x)
      {
      // black 
      // fill("white") //white
       stroke(0)
       //rect(j,i,this.x,this.y)
       this.arr.push(rect(j,i,this.x,this.y))
      }
     }
     return this.arr
   }
   
   update()
   {
    let a = 0.0;
    let inc = TWO_PI / 100.0;
      for(let i = 0; i < height; i += this.y)
     { 
       fill(random(0,225),random(0,225),random(0,255))
       for(let j = 0; j < width; j += this.x)
      {
       //fill(random(0,225),random(0,225),random(0,255))
       stroke(30)
       //rect(j,i,this.x,this.y)
       //this.arr.push(rect((width) + sin(a) * 80.0 + random(0,200) , i ,this.x,this.y))
       this.arr.push(rect((width/2.3) + sin(a) * (mouseX /3) + random(0,50) , (mouseY),this.x ,this.y))
      // this.arr.push(rect((width/2.5) + sin(a) * mouseX + random(0,200) , i + random(0,25) ,this.x ,this.y))// sin fun
      // this.arr.push(rect((width/2) + sin(a) * 100.0 + random(0,200) , i + random(0,5) ,mouseX /random(1,25) ,mouseY/random(1,25) ))//wild 
       //this.arr.push(rect((width/1.5) + sin(a) * 100.0 + random(0,200) , i + random(0,5) ,this.x ,this.y ))// ask
       //this.arr.push(rect((width/8) + sin(a) * 80.0 + random(0,200) , i + random(0,25) ,this.x,this.y))//ask
       //this.arr.push(rect((width/1.5) + sin(a) * 120,i,this.x,this.y))
       //this.arr.push(rect((width/2) + sin(a) * 120,i,this.x,this.y))
        a = a + inc;
      }
     }
     return this.arr
   }

  update2()
   {
        this.update()
       fill(random(0,180),random(0,180),random(0,180))
        noStroke(); 
       let a = 0.0;
let inc = TWO_PI / 25.0;
for (let i = 0; i < width /4; i++) {
  //line(i * 8, height /2, i * 8, (height/2) + sin(a) * 80.0);
   fill(random(0,225),random(0,250),random(0,250))
        stroke(10); 
        circle(i * 10,(height/2) + sin(a) * 200, 200)
  //circle(i * 8,(height/4) + sin(a) * 80.0, 50)
 // circle(i * 8,(height/1.5) + sin(a) * 80.0, 50)
  //circle((width/2) + sin(a) * 100,i*8, 50)
 // rect(i * 8,(height/2) + sin(a) * 80.0,this.x,this.y)
  a = a + inc;
}

      // rect(random(0,width),random(0,height),this.x,this.y)
     //this.arr[random(0,arr.length)] = rect(0,0,this.x,this.y) ;
     
    // return this.arr
   }


   


  }