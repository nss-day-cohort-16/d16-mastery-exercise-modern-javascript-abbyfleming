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
};


function fight(){

	let userRobot = getUserRobotValue();
	let enemyRobot = getEnemyRobotValue();

	$("#dom-display-battle").html(`A wise choice. You have chosen ${userRobot.name} the ${userRobot.robotName} to battle ${enemyRobot.name} the ${enemyRobot.robotName}.`);
	
	userRobot.fight(enemyRobot.damage);
	enemyRobot.fight(userRobot.damage);

	console.log("userRobot", userRobot);
	console.log("enemyRobot", enemyRobot); 

	if (userRobot.health <= 0 || enemyRobot.health <= 0){
		winner(userRobot, enemyRobot);
	}	
}


function winner(userRobot, enemyRobot){

	if (userRobot.health <= 0){
		//enemy won
		$("#dom-display-winner").html(`${enemyRobot.name} the ${enemyRobot.type} defeated ${userRobot.name} the ${userRobot.type} with ${enemyRobot.weapon}.`);
	} 
	else if (enemyRobot.health <= 0){
		//user won
		$("#dom-display-winner").html(`${userRobot.name} the ${userRobot.type} defeated ${enemyRobot.name} the ${enemyRobot.type} with ${userRobot.weapon}.`);
	}
	else if (enemyRobot.health <= 0 && userRobot.health <= 0){
		$("#dom-display-winner").html(`Total Knockout. Robots tied. Fight again.`);
	}
}

