"use strict";


/* ---------------  EVENT LISTENERS --------------- */


// Determine which robot has been selected.


function getUserRobotValue(){
		let selectUserRobot = $('#UserRobot').val();		
		let UserRobot = determineRobots(selectUserRobot);
		UserRobot.name = $('#robotOneName').val();
		//console.log("UserRobot", UserRobot); 
		return UserRobot;
 }

function getEnemyRobotValue(){
		//Grab the robot chosen
		let selectEnemyRobot = $('#EnemyRobot').val();
		//Determine which robot was chosen
		let EnemyRobot = determineRobots(selectEnemyRobot);
		//Give the chosen robot the user input name
		EnemyRobot.name = $('#robotTwoName').val();
		//console.log("EnemyRobot", EnemyRobot);

		return EnemyRobot;

}


$('#attackBtn').click(function(){
	fight();
});
