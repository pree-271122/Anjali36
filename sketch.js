//Create variables here
var dog, happyDog,dogSprite;
 var database;
 var foodS, foodStock;
 var database,position;
 var food=19;
 var house;
 
 var feed,addFood;
 var feedTime,lastFed;
 var foodobj,addFoods;
function preload()
{
	// images 
dogSprite=loadImage("Dog.png")
happyDog=loadImage("happy dog.png")
//house=loadImage("images/images 2.jpg")

}

function setup() {
  database=firebase.database()
	createCanvas(1000, 500);
  dog=createSprite(800,400,50,50)
  dog.addImage(dogSprite)
  dog.scale=0.2;

 

  var foodStock=database.ref('dog/position')
  foodStock.on("value",readStock)

 foodobj=new Food(100,100,50,50)

 
feed=createButton("Feed the dog")
feed.position(700,95)
feed.mousePressed(feedDog);

addFood=createButton("Add Food");
addFood.position(800,95);
addFood.mousePressed(addFoods);

}


function draw() {  
background("green")
 foodobj.display()

fill("pink")
textSize(15)
if(lastFed>=12){
  text("Last Feed:"+lastFed%12+"PM",350,30)
  }else if(lastFed==0){
  text("Last Feed:12 AM",350,30)
  }
  else{
    text("Last Feed:"+lastFed+"AM",350,30)
  }


if(food<1){
food=0;
}
  drawSprites();
  textSize(20)
  fill("red")
  stroke("black")
  text("FoodStock:"+food,180,280)
  
  text("Note:Press UP_ARROW Key To Feed Drago Milk!",30,70)
  //add styles here

}
function readStock(data){
foodS=data.val();
}

function feedDog(){
  dog.addImage(happyDog);
  food.updatefoodStock(food.getfoodStock()-1)
  database.ref('/').update({
    Food:food.getfoodStock(),
    feedTime:hour()
  })
  }
  function addFood(){
    foodS++
     database.ref('/').update({
       Food:foodS
     })
  }
   //function getfoodStoke(){
  //    var  foodStockRef=database.ref('foodStoke')
    //    foodStockRef.on("value".function(data)) 
     //       foodStock=data.val();
  // }
  



