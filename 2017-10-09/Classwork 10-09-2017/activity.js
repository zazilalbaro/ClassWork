var inquirer = require("inquirer");

var Player = function (name, position, offense, defense) {
	this.name = name;
	this.position = position;
	this.offense = offense;
	this.defense = defense;
};

Player.prototype.goodGame = function() {
	// add to offense OR defense??
	if (this.position == "Offense") {
		this.offense ++;
	}
	else {
		this.defense ++;
	}
};

Player.prototype.badGame = function() {
	// subtract to offense OR defense??
	if (this.position == "Offense") {
		this.offense --;
	}
	else {
		this.defense --;
	}
};

Player.prototype.printStats = function() {
	console.log("Name: " + this.name + 
				"\n Position: " + this.position + 
				"\n Offense: " + this.offense + 
				"\n Defense: " + this.defense + 
				"\n Good Game: " + this.goodGame +
				"\n Bad Game: " + this.badGame
	);
};


var tCount = 0;
var playaArray = [];

var playas = function () {

	if (tCount < 8) {
		inquirer.prompt([ 
			{
		        name: "name",
		        message: "Enter player name"
		    },
		    {
		    	name: "position",
		    	choices: ["Offense", "Defense"],
		    	message: "What is your player's position?"
		    },
		    {
		    	name: "offense",
		    	choices: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
		    	message: "How good is this player at offense on a scale of 1-10?"
		    },
		    {
		    	name: "defense",
		    	choices: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
		    	message: "How good is this player at defense on a scale of 1-10?"
		    }
		]).then(function(answers) {
			var newPlaya = new Player(
				answers.name,
				answers.position,
				answers.offense,
				answers.defense);

			playaArray.push(newPlaya);

			tCount++;

			playas();
		});
	}
	else {
		for (var i = 0; i < playaArray.length; i++) {
		     playaArray[i].printStats();
		};
	}
};

playas();

// .then(function()) {

// }