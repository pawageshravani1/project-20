var mousedance,mousecheese,mousecollid,mouse;
var bg,bgImage;
var cat,catSit;catWalk,catCollide;


function preload() {
    //load the images here
    mouseCheese = loadImage("mouse1.png");
    mouseDance = loadAnimation("mouse2.png","mouse3.png");
    mouseCollide = loadImage("mouse4.png",);

    catSit = loadImage("cat1.png");

  catWalk = loadAnimation("cat2.png","cat3.png");

  catCollide = loadImage("cat4.png");

    bgImg = loadImage("garden.png");


 }

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites
    mouse = createSprite(100,420,20,20);
    mouse.addAnimation("mouse1",mouseCheese);

    mouse.addAnimation("mouse4",mouseCollide);

    mouse.addAnimation("mouse2,mouse3",mouseDance);

    mouse.scale = 0.1;
mouse.debug=true;

//background
    bg = createSprite(200,200,20,20);
    bg.addImage("bg",bgImg);

//cat
cat = createSprite(580,420,20,20);

cat.addAnimation("cat1",catSit);



cat.addAnimation("cat4",catCollide);

cat.addAnimation("cat2,cat3",catWalk);


cat.scale = 0.16;




}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide

    if(cat.x - mouse.x < (cat.width/2 - mouse.width/2)+20
      ){

        mouse.changeAnimation("mouse4",mouseCollide);

        cat.velocityX = 0;

        cat.changeAnimation("cat4",catCollide);

    }

keyPressed();
    drawSprites();
}


function keyPressed(){
  //For moving and changing animation write code here

  if(keyDown("left")) {

    cat.velocityX = -3;

    cat.changeAnimation("cat2,cat3",catWalk);

    mouse.changeAnimation("mouse2,mouse3",mouseDance);
  }

}
