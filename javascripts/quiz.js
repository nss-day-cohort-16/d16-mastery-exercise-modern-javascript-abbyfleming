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
	this.type = "Wedge";
	this.weapon = "wedgies";
	this.weightClass = "Featherweight";
}

Wedge.prototype = new Robot();


/// SPINNER
function Spinner(){
	this.type = "Spinner";
	this.weapon = "fast spinny things";
	this.weightClass = "Hobbyweight";
}

Spinner.prototype = new Robot();


/// FLIPPER
function Flipper(){
	this.type = "Flipper";
	this.weapon = "power lift";
	this.weightClass = "Lightweight";
}

Flipper.prototype = new Robot();


/* --------------- 6 ROBOT MODELS / 2 PER TYPE --------------- */

// WEDGE MODELS
let whambulance = new Wedge();
	whambulance.health = Math.floor(Math.random() * (80 - 50)) + 50;
	whambulance.damage = Math.floor(Math.random() * (50 - 30)) + 30;

let wedgie = new Wedge();
	wedgie.health = Math.floor(Math.random() * (100 - 70)) + 70;
	wedgie.damage = Math.floor(Math.random() * (70 - 40)) + 40;

// SPINNER MODELS
let gatorblade = new Spinner();
	gatorblade.health = Math.floor(Math.random() * (120 - 60)) + 60;
	gatorblade.damage = Math.floor(Math.random() * (90 - 60)) + 60;

let spinister = new Spinner();
	spinister.health = Math.floor(Math.random() * (90 - 60)) + 60;
	spinister.damage = Math.floor(Math.random() * (60 - 30)) + 30;


//FLIPPER MODELS
let jackTheFlipper = new Flipper();
	jackTheFlipper.health = Math.floor(Math.random() * (100 - 80)) + 80; 
	jackTheFlipper.damage = Math.floor(Math.random() * (80 - 50)) + 50; 


let vladiator = new Flipper();
	vladiator.health = Math.floor(Math.random() * (110 - 80)) + 70;
	vladiator.damage = Math.floor(Math.random() * (90 - 70)) + 70;





