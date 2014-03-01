//<!--  Contains functions to create, draw and modify creeps -->

// Image paths

var imgIndifferentSmily = 'images/icon_27452.svg'; // Indifferent by Nicolás Celedón from The Noun Project
var imgRudolf = 'images/icon_27366.svg'; // Reindeer by Factorio.us collective from the Noun Project
var imgGlow = 'images/icon_8502.svg'; // Idea by Björn Andersson from the Noun Project
var imgAngryDiamond = 'images/icon_6607.svg'; // Explosion by Polina Flegontovna from the Noun Project
var imgBang = 'images/icon_2348.svg'; // Explosion by Renee Ramsey-Passmore from the Noun Project

var imgTruckKaboom = 'images/icon_3243.svg'; // Armored Truck designed by Luis Prado from the Noun Project

// 

function creep(posX,posY,direction,hitPoints){
	this.posX = posX;
	this.posY = posY;
	this.direction = direction;
	this.hitPoints = hitPoints;
	this.size = 10;
	this.image = new Image();
	this.image.src = imgRudolf;
	this.randomShort = 5;
	this.randomMedium = 5;
	this.randomLong = 5;

	this.drawCreep=drawCreep;
	function drawCreep(ctx){
		ctx.save();
	  ctx.translate(this.posX, this.posY);
	  ctx.rotate(to_rad(this.direction));
		ctx.drawImage(this.image,-50,-50);
	  ctx.restore();
	};
};

function drawCreep(ctx){
	ctx.save();
  ctx.translate(this.posX, this.posY);
  ctx.rotate(to_rad(this.direction));
	ctx.drawImage(this.image,-25,-25);
  ctx.restore();
};

function drawAllCreeps(ctx){
	for (var i = 0; i < creeps.length; i++) {
       creeps[i].drawCreep(ctx);
  };
};

function updateCreeps(){

	for (var i = 0; i < creeps.length; i++) {
	    creeps[i].direction = creeps[i].direction + ((creeps[i].randomMedium - 5) * .3);
	    creeps[i].posX = creeps[i].posX + ((creeps[i].randomShort - 5) * .5);
	    creeps[i].posY = creeps[i].posY + ((creeps[i].randomMedium - 5) * .5);
	    
	    if (amIHit(creeps[i], creeps[i].posX, creeps[i].posY, creeps[i].size) == true) {
	    	creeps[i].hitPoints = creeps[i].hitPoints - randomShort; 	
	    };
	    
	    if (creeps[i].hitPoints < 1) {
	    	deathRattle(creeps[i].posX, creeps[i].posY);
	    	delete creeps[i]; // not using splice because extra cycles to reindex  
	    };

	};

};



function amIHit(creep,posX,posY,size){
	return false; // temporary! 
};

function deathRattle(posX, posY){
	alert("deathRattle - a creep has died")
	console.log("deathRattle called")
};


function updateRandomFactors(collection){

		if (gameLoopCounter%30 == 1){	// SHORT random factor generator
		console.log("%30")
		for (var i = 0; i < creeps.length; i++) {
		    creeps[i].randomShort = to_i(((Math.random() * 10) + 1));
		    console.log(creeps[i].randomLong)
		};
	};

	if (gameLoopCounter%100 == 1){	// MEDIUM random factor generator
		console.log("%100")
		for (var i = 0; i < creeps.length; i++) {
		    creeps[i].randomMedium = to_i(((Math.random() * 10) + 1));
		    console.log(creeps[i].randomMedium)
		};
	};

	if (gameLoopCounter%1000 == 1){	// LONG random factor generator
		console.log("%1000")
		for (var i = 0; i < creeps.length; i++) {
		    creeps[i].randomLong = to_i(((Math.random() * 10) + 1));
		    console.log(creeps[i].randomLong)
		};
	};
}

var creeps = [];

// DRIVER CODE FOR DEVELOPMENT


var my_creep = new creep(300,100,180,10);
var my_creep2 = new creep(100,500,180,10);
var my_creep3 = new creep(200,100,180,10);
creeps.push(my_creep)
creeps.push(my_creep3)
creeps.push(my_creep2)


var my_other_creep = new creep(150,150,180,10);
creeps.push(my_other_creep)

// console.log(my_creep);
// console.log(creeps);
// console.log(creeps[0].direction)