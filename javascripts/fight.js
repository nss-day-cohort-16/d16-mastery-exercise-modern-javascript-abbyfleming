"use strict";


function determineRobots(robotFromDom){

	let userRobot;

	if (robotFromDom === "whambulance") {
		userRobot = whambulance;
	} 
	else if (robotFromDom === "wedgie"){
		userRobot = wedgie;
	}
	else if (robotFromDom === "gatorblade"){
		userRobot = gatorblade;
	}
	else if (robotFromDom === "spinister"){
		userRobot = spinister;
	}
	else if (robotFromDom === "jackTheFlipper"){
		userRobot = jackTheFlipper;
	}
	else if (robotFromDom === "vladiator"){
		userRobot = vladiator;
	}

	return userRobot;

}

Robot.prototype.fight = function(damage){
	this.health -= damage;
	console.log("prototype fight", this.health);

	if (this.health <= 0){
		winner();
	}
}


function fight(){

	let userRobot = getUserRobotValue();
	let enemyRobot = getEnemyRobotValue();

	$("#dom-display-battle").html(`A wise choice. You have chosen ${userRobot.name} the ${userRobot.robotName} to battle ${enemyRobot.name} the ${enemyRobot.robotName}.`);
	
	//pass in damage of each robot instead of 5 or 10.
	userRobot.fight(5);
	enemyRobot.fight(10);
	
}


function winner(){
	//$("#dom-display-battle").html(`${userRobot.name} the ${userRobot.type} defeated ? with its ?`);
	$("#dom-display-winner").html(`We have a winner!`);
}