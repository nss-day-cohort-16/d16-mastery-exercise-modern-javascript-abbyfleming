"use strict";


/* ---------------  EVENT LISTENERS --------------- */

$('#UserRobot').change(function(){
	console.log("User Robot --> ", this.value);
});

$('#EnemyRobot').change(function(){
	console.log("Enemy Robot --> ", this.value);
});

$('#attackBtn').click(function(){
	console.log("you clicked the attack button");
});