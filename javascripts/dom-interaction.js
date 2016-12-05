"use strict";


/* ---------------  EVENT LISTENERS --------------- */

function getUserRobotValue(){
	let selectUserRobot = $('#UserRobot').val();		
	let UserRobot = determineRobots(selectUserRobot);
	UserRobot.name = $('#robotOneName').val(); 
	return UserRobot;
 }

function getEnemyRobotValue(){
	let selectEnemyRobot = $('#EnemyRobot').val();
	let EnemyRobot = determineRobots(selectEnemyRobot);
	EnemyRobot.name = $('#robotTwoName').val();
	return EnemyRobot;
}


$('#attackBtn').click(function(){
	fight();
});
