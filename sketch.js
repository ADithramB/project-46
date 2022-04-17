var background1;
var gun,bullet1,bullet
var target,target1,target2,target3
var gameover1

var PLAY =1;
var END =0;

var gameState = PLAY;

function preload(){
    bg = loadImage("background.png")
    gun = loadImage("gun.png")
    target = loadImage("target.png")
    bullet = loadImage("bullet.jpg")
    gameover1 = loadImage("gameover.png")



}

function setup() {
    createCanvas(1000, 500);

    
    

    background1 = createSprite(250,250,400,400)
    background1.addImage(bg)
	  background1.scale = 10

   

    

    gun1 = createSprite(800,220,20,50)
	  gun1.addImage(gun)
	  gun1.scale = 0.05

    gameover = createSprite(500,250,20,10)
    gameover.addImage(gameover1)

    target1 = createSprite(50,250,20,10)
    target1.addImage(target)
    target1.scale = 0.2 
    

    target2 = createSprite(250,50,20,10)
    target2.addImage(target)
    target2.scale = 0.2 

    target3 = createSprite(450,450,20,10)
    target3.addImage(target)
    target3.scale = 0.2 
    target1.velocityY = -5
    target2.velocityY = -3
    target3.velocityY = -7
    

    bullet1 = createSprite(800,220,10,25)
    bullet1.addImage(bullet)
    bullet1.scale = 0.02

    bulletGroup = new Group()

 
}

function draw() {
    background("black")

    background1.velocityX = -3 ;
    if (background1.x < 0){
      background1.x =background1.width/2;
    }
    

    if(gameState === PLAY){
   

      

      if(keyDown("space")){
        createBullets();
      }

      
      gun1.y = mouseY
      bullet1.y = gun1.y


      if(bulletGroup.isTouching(target1) || bulletGroup.isTouching(target2) || bulletGroup.isTouching(target3)){
       gameState = END;
      }

      gameover.visible = false




    }
    else if(gameState === END){
      target1.visible = false
      target2.visible = false
      target3.visible = false
      bulletGroup.destroyEach()
      gun1.visible = false
      bullet1.visible = false
      gameover.visible = true
    }





  



  function createBullets() {
    var bullet1 = createSprite(100, 100, 60, 10);
    bullet1.addImage(bullet);
    bullet1.x = 800;
    bullet1.y=gun1.y;
    bullet1.velocityX = -8;
    bullet1.lifetime = 300;
    bullet1.scale = 0.03;
    bulletGroup.add(bullet1)
  }

  Edge1=createEdgeSprites();
  target1.bounceOff(Edge1);
  target2.bounceOff(Edge1)
  target3.bounceOff(Edge1)

    

    drawSprites();


}