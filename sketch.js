var dog,sadDog,happyDog;
var feed, addf;
var foodObj;

function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
}

function setup() {
  createCanvas(1000,400);
  
  dog=createSprite(800,200,150,150);
  dog.addImage(sadDog);
  dog.scale=0.15;

  foodObj=new Food();
  
  feed=createButton("Feed the dog");
  feed.position(700,100);
  feed.mousePressed(feedDog);

  addf=createButton("Add food");
  addf.position(800,100);
  addf.mousePressed(addFood)
}

function draw() {
  background(46,139,87);
  foodObj.display();
  drawSprites();
  
}

function feedDog(){
  dog.addImage(happyDog);

  if(foodObj.getFoodStock()<=0){
    foodObj.updateFoodStock(foodObj.getFoodStock()*0);
  }
  else{
    foodObj.updateFoodStock(foodObj.getFoodStock()-1);
  }
}

function addFood(){
  foodObj.foodStock=foodObj.foodStock+1;
  foodObj.updateFoodStock(foodObj.foodStock);
}