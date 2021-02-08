var   fruit,enemy,blade,fruit1Image,enemyImage,bladeImage,fruit2Image,fruit3Image,fruit4Image,rand,score=0,fruitGroup,gameOver,restart,knifeSound,gameOverSound,invis,gameOverImage;

var PLAY = 1;
var END = 0;
var gameState = 1;

function preload(){
 fruit1Image=loadImage("fruit1.png");
 fruit2Image=loadImage("fruit2.png");
 fruit3Image=loadImage("fruit3.png");  fruit4Image=loadImage("fruit4.png");
 bladeImage=loadImage("sword.png");
 enemyImage=loadAnimation("alien1.png","alien2.png");
 gameOverImage=loadImage("gameover.png");
  gameOverSound=loadSound("gameover.mp3");
  knifeSound=loadSound("knifeSwooshSound.mp3");
}

function setup(){
  
  blade=createSprite(300,100,40,10);
  blade.addImage(bladeImage);
  blade.scale=0.4;

  fruitGroup = new Group();
  enemyGroup = new Group();
  fruitGroup2 = new Group();
  
  invis=createSprite(10,200,50,1000);
  
  gameOver=createSprite(200,200,20,20);
  gameOver.addImage(gameOverImage);
  
}
 
function draw(){

  background("lightblue");
  
   blade.y=World.mouseY;
  blade.x=World.mouseX;
  
  textSize(20); 
  text("score:"+score,50,50);
  
  invis.visible=false;
  gameOver.visible=false;
  
  if(fruitGroup.isTouching(blade)){
  fruitGroup.destroyEach();
    score=score+2;
    knifeSound.play();
    fruitGroup.velocityX=0;
  }
  
  if(enemyGroup.isTouching(blade)){
    gameState=END;
    gameOver.visible=true
    gameOverSound.play();
    enemyGroup.destroyEach();
    score=0
  } 
  
  if(fruitGroup2.isTouching(blade)){
  fruitGroup2.destroyEach();
    score=score+2;
    knifeSound.play();
    fruitGroup2.velocityX=0;
  }
  
  if(score===4){
    fruitGroup.velocityX=-10  
  }
  
  if(score===10){
    enemyGroup.velocityX=-11  
  }
  
  createFruit();
  createFruit2();
  createEnemy();
  drawSprites();
}


function createFruit(){
  
  if (World.frameCount%80===0){
    fruit=createSprite(400,200,20,20);
    fruit.scale=0.2;
     r=Math.round (random(1,4));
    if(r==1){
     fruit.addImage(fruit1Image) ;
    }
      else if(r==2){
     fruit.addImage(fruit2Image) ;
    }
    else if(r==3){
     fruit.addImage(fruit3Image) ;
    }
      else{
     fruit.addImage(fruit4Image) ;
    }
    fruit.y=Math.round(random(50,340));
    fruit.velocityX=-7;
    fruit.setLifetime=100;
    fruitGroup.add(fruit);
      }
}
  function createEnemy (){
    if(World.frameCount%200===0){
      enemy = createSprite(400,200,20,20);
      enemy.addAnimation("moving",enemyImage);
      enemy.y=Math.round(random(100,300));
      enemy.velocityX=-8;
      enemy.setLifetime = 50;
      
      enemyGroup.add(enemy)
    
  }
}

function createFruit2(){
  
  if (World.frameCount%80===0){
    fruit=createSprite(1,200,20,20);
    fruit.scale=0.2;
     r=Math.round (random(1,4));
    if(r==1){
     fruit.addImage(fruit1Image) ;
    }
      else if(r==2){
     fruit.addImage(fruit2Image) ;
    }
    else if(r==3){
     fruit.addImage(fruit3Image) ;
    }
      else{
     fruit.addImage(fruit4Image) ;
    }
    fruit.y=Math.round(random(50,340));
    fruit.velocityX=7;
    fruit.setLifetime=100;
    fruitGroup2.add(fruit);
      }
}
