var path, invisibleBoundaryRight, invisibleBoundaryLeft, pathImg;
var surfer, surfer_running, surferImg;
var coins, coinsImg;
var coinsGroup;
//var bomb, bombImg, bombGroup;
var score = 0;

function preload(){
  //pre-load images
  pathImg = loadImage("path.png");
  coinsImg = loadImage("coin.png");
  surfer_running = loadAnimation("Jake1.png","Jake2.png","jake3.png","jake4.PNG");
  //bombImg = loadAnimation("bomb.png");

}


function setup(){
  createCanvas(400,400);  

  //creating invisible boundaries
  invisibleBoundaryRight = createSprite(400,-200);
  invisibleBoundaryLeft = createSprite(-400,-200);
  invisibleBoundaryRight.visible = false;
  invisibleBoundaryLeft.visible = false;

  coinsGroup = new Group();

  //path sprite 
  path=createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale=1.2;

  //surfer sprite
  surfer = createSprite(200,180,30,30);
  surfer.addAnimation("running", surfer_running);


  
  

}

function draw(){
  background(0);
  //surfer.x = mouseX;
  edges = createEdgeSprites();

  surfer.x = World.mouseX; 
  
  //moving background
  if (path.y > 400){
    path.y = height/2;
    }


    if (surfer.isTouching(coinsGroup)){
      coinsGroup.destroyEach();
      score = score+1;
    }

    //if (coinsGroup.isTouching(edges)){
      //coinsGroup.setAnimationEach("bomb");
    //}  
    


    
  
  drawSprites();

  stroke("white");
  text("Score: " + score, 300, 30);

  spawnCoins();

}


//spawning coins in random positions
function spawnCoins() {
  if (frameCount % 60 == 0){
    coins = createSprite(10, 20);
    coins.addImage(coinsImg);
    coins.x = Math.round(random(100, 300));
    coins.scale = 0.35;
    coins.velocityY = 5;
    coins.lifetime = 200;
    coinsGroup.add(coins);
    //coinsGroup.setAnimationEach("bomb", bombImg);
  }

}


