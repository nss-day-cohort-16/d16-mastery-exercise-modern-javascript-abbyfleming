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
	whambulance.robotName = "Whambulance";
	whambulance.health = Math.floor(Math.random() * (80 - 50)) + 50;
	whambulance.damage = Math.floor(Math.random() * (20 - 10)) + 10;

let wedgie = new Wedge();
	wedgie.robotName = "Wedgie";
	wedgie.health = Math.floor(Math.random() * (100 - 70)) + 70;
	wedgie.damage = Math.floor(Math.random() * (30 - 20)) + 20;

// SPINNER MODELS
let gatorblade = new Spinner();
	gatorblade.robotName = "Gatorblade";
	gatorblade.health = Math.floor(Math.random() * (120 - 60)) + 60;
	gatorblade.damage = Math.floor(Math.random() * (25 - 15)) + 15;

let spinister = new Spinner();
	spinister.robotName = "Spinister";
	spinister.health = Math.floor(Math.random() * (90 - 60)) + 60;
	spinister.damage = Math.floor(Math.random() * (35 - 25)) + 25;


//FLIPPER MODELS
let jackTheFlipper = new Flipper();
	jackTheFlipper.robotName = "JackTheFlipper";
	jackTheFlipper.health = Math.floor(Math.random() * (100 - 80)) + 80; 
	jackTheFlipper.damage = Math.floor(Math.random() * (15 - 5)) + 5; 


let vladiator = new Flipper();
	vladiator.robotName = "Vladiator";
	vladiator.health = Math.floor(Math.random() * (110 - 80)) + 70;
	vladiator.damage = Math.floor(Math.random() * (40 - 30)) + 30;
