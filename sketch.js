function preload (){
  monkeyImage = loadAnimation ("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png")
  
  bgImage = loadImage ("jungle.jpg")
  
  bananaImage = loadImage("banana.png")
  stoneImage = loadImage("stone.png")
  
  
}


function setup() {
  createCanvas(800, 400);
  
  bg = createSprite(400,00,20,20);
  bg.addImage(bgImage)
  bg.velocityX = -3  
  bg.scale = 2
  
  ground = createSprite(400,375,800,10);
  ground.visible = false
  
  
  monkey = createSprite(90,370,10,10);
  monkey.addAnimation("running",monkeyImage)
  monkey.scale = 0.075
}

function draw() {
  background(220);
  
  if (bg.x < 0){
    bg.x = bg.width/2
  }
  
if (keyDown ("space") & monkey.y >= 346){
  monkey.velocityY = -20
}
  
  console.log(monkey.y)

  monkey.velocityY = monkey.velocityY + 1.5
  
  createBanana()
  monkeyEatBanana()
  
  monkey.collide(ground)
  
 drawSprites()
}

function createBanana(){
  if (frameCount % 120 === 0 ){
    banana = createSprite(800,250,10,10)
    banana.addImage(bananaImage)
    banana.velocityX = -3
    banana.scale = 0.05
  }
}

function monkeyEatBanana(){
  
  if (monkey.isTouching (banana)){
      monkey.scale = monkey.scale+0.05
      
      }
}


