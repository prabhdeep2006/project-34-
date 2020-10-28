//Create variables here
var dog;
var happyDog;
var database;
var foodS=0;
var foodStock; 
var dog1; 

function preload()
{
  //load images here
  dog=loadImage("images/dogImg.png");
  happyDog=loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);
   dog1 = createSprite(250,300);
   dog1.addImage(dog);
   //dog1.addImage(happyDog);
   dog1.scale=0.2;
 
  database = firebase.database(); 
  foodStock = database.ref('Food'); 
  foodStock.on("value",readStock); 
}


function draw() { 
  background(46,139,87); 

  if(keyWentDown(UP_ARROW)){
    foodS = foodS-1;
    writeStock(foodS); 
    dog1.addImage(happyDog);
    //dog1.scale=0.2;
  }
  

  drawSprites();
  //add styles here
  fill("black");
  textSize(20); 
  text("Feed the dog to make it happy",100,100); 
  text("No.of foodstocks available " + foodS,100,150); 
  
}
function readStock(data){
  foodS=data.val(); 
}

function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}
