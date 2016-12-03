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




function fight(userRobot, enemyRobot){
	//for both robots:

	//robot health - robot damage
	//update health
	
	//if health < 0, declare a winner.
}


function winner(){
	$("#dom-display-winner").html(`${userRobot.name} the ${userRobot.type} defeated ? with its ?`);
}