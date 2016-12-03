"use strict";


/* ---------------  EVENT LISTENERS --------------- */

$('#attackBtn').click(function(){
	//go attack!!!
});



// Determine which robot has been selected.

$('#UserRobot').change(function(){
	//Grab the robot chosen
	let selectUserRobot = $('#UserRobot').val();
	
	//Determine which robot was chosen
	let UserRobot = determineRobots(selectUserRobot);
	
	//Give the chosen robot the user input name
	UserRobot.name = $('#robotOneName').val();
	
	console.log("UserRobot", UserRobot); 

});



$('#EnemyRobot').change(function(){
	//Grab the robot chosen
	let selectEnemyRobot = $('#EnemyRobot').val();

	//Determine which robot was chosen
	let EnemyRobot = determineRobots(selectEnemyRobot);

	//Give the chosen robot the user input name
	EnemyRobot.name = $('#robotTwoName').val();
	
	console.log("EnemyRobot", EnemyRobot);
});

