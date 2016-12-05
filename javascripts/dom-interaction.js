"use strict";


/* ---------------  EVENT LISTENERS --------------- */

function getUserRobotValue(){
	let selectUserRobot = $('#UserRobot').val();
	let UserRobot = determineRobots(selectUserRobot);
	
	UserRobot.name = $('#robotOneName').val(); 
	
	// /// VALIDATE NAME
	// if (UserRobot.name === "") {
	// 	window.alert("Woah there! You need to name your robot.");
	// 	$("#robotOneName").focus();
	// }
	// ///

	return UserRobot;
 }



function getEnemyRobotValue(){
	let selectEnemyRobot = $('#EnemyRobot').val();
	let EnemyRobot = determineRobots(selectEnemyRobot);
	
	// /// VALIDATE NAME
	// if (UserRobot.name === "") {
	// 	window.alert("Woah there! You need to name your robot.");
	// 	$("#robotTwoName").focus();
	// }
	// ///

	EnemyRobot.name = $('#robotTwoName').val();
	return EnemyRobot;
}



$('#attackBtn').click(function(){
	fight();
});
