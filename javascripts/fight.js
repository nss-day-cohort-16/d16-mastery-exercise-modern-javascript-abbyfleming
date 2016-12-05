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
}


function fight(){

	let userRobot = getUserRobotValue();
	let enemyRobot = getEnemyRobotValue();

	$("#dom-display-battle").html(`A wise choice. You have chosen ${userRobot.name} the ${userRobot.robotName} to battle ${enemyRobot.name} the ${enemyRobot.robotName}.`);
	
	userRobot.fight(enemyRobot.damage);
	enemyRobot.fight(userRobot.damage);

	if (userRobot.health <= 0 || enemyRobot.health <= 0){
		winner(userRobot, enemyRobot);
	}
	
}


function winner(user, enemy){

	if (user.health <= 0){
		//enemy won
		$("#dom-display-winner").html(`${enemy.name} the ${enemy.type} defeated ${user.name} the ${user.type} with ${enemy.weapon}.`);
	} 
	else if (enemy.health <= 0){
		//user won
		$("#dom-display-winner").html(`${user.name} the ${user.type} defeated ${enemy.name} the ${enemy.type} with ${user.weapon}.`);
	}
	else if (enemy.health <= 0 && user.health <= 0){
		$("#dom-display-winner").html(`Total Knockout. Robots tied. Fight again.`);
	}
}