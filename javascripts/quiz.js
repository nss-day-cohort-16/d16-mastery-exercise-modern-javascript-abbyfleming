"use strict";

/* ---------------  BASE ROBOT MODEL --------------- */
/* Once completed, do not touch! */

function Robot(){
	this.name = "";
	this.flamethrower = false;
}


/* --------------- 3 ROBOT TYPES --------------- */

/// WEDGE
function Wedge(){
	this.type = "wedge";
	this.weapon = "wedgies";
	this.weightClass = "Featherweight";
}

Wedge.prototype = new Robot();


/// SPINNER
function Spinner(){
	this.type = "spinner";
	this.weapon = "fast spinny things";
	this.weightClass = "Hobbyweight";
}

Spinner.prototype = new Robot();


/// FLIPPER
function Flipper(){
	this.type = "flipper";
	this.weapon = "power lift";
	this.weightClass = "Lightweight";
}

Flipper.prototype = new Robot();


/* --------------- 6 ROBOT MODELS / 2 PER TYPE --------------- */

// WEDGE MODELS
let whambulance = new Wedge();
	whambulance.health = Math.floor(Math.random() * (80 - 50)) + 50;
	whambulance.damage = Math.floor(Math.random() * (110 - 80)) + 70;

let wedgie = new Wedge();
	wedgie.health = Math.floor(Math.random() * (100 - 70)) + 70;
	wedgie.damage = Math.floor(Math.random() * (50 - 30)) + 30;

// SPINNER MODELS
let gatorblade = new Spinner();
	gatorblade.health = Math.floor(Math.random() * (120 - 60)) + 60;
	gatorblade.damage = Math.floor(Math.random() * (100 - 60)) + 60;

let spinister = new Spinner();
	spinister.health = Math.floor(Math.random() * (90 - 60)) + 60;
	spinister.damage = Math.floor(Math.random() * (60 - 40)) + 40;


//FLIPPER MODELS
let jackTheFlipper = new Flipper();
	jackTheFlipper.health = Math.floor(Math.random() * (50 - 30)) + 30; //Obvs this is a crummy robot.
	jackTheFlipper.damage = Math.floor(Math.random() * (120 - 60)) + 60; //But could damage a bit. Hehe.


let vladiator = new Flipper();
	vladiator.health = Math.floor(Math.random() * (110 - 80)) + 70;
	vladiator.damage = Math.floor(Math.random() * (90 - 60)) + 60;


/* ----- CONSOLE LOG  ----- */

// console.log("whambulance", whambulance);
// console.log("wedgie", wedgie);
// console.log("gatorblade", gatorblade);
// console.log("spinister", spinister);
// console.log("jackTheFlipper", jackTheFlipper);
// console.log("vladiator", vladiator);





