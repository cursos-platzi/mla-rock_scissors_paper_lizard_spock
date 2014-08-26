function randomNumber(min, max)
{	
	return Math.floor(Math.random() * (max - min + 1) + min);
}

function userSelection(element)
{
	// var element = document.getElementById("rock");
	// element.style.left = (element.style.left+10)+'px';
	// element.style.border="thick solid #0000FF";
	var machineChoise = randomNumber(1,3);
	var userValue;

	if (element.id == "rock") userValue = 1
	else if (element.id == "paper") userValue = 2
	else if (element.id == "scissors") userValue = 3
	console.log("Machine " + machineChoise);
	console.log("User " + userValue);
	validateWinner(userValue, machineChoise);

}

function validateWinner(userChoise, machineChoise)
{
	if (userChoise == machineChoise) 
	{
		alert("Draw, you both lose :(");
	}
	else if (userChoise == 1)
	{
		if (machineChoise == 2)
		{
			alert("you choise Rock, the computer choise Paper");
			alert("You won :) !!");
		}
		else if (machineChoise == 3)
		{
			alert("you choise Rock, the computer choise Scissors");
			alert("YOO LOSE :(")
		}
	}
	else if (userChoise == 2)
	{
		if (machineChoise == 1)
		{
			alert("you choise Paper, the computer choise Rock");
			alert("You won :) !!");
		}
		else if (machineChoise == 3)
		{
			alert("you choise Paper, the computer choise Scissors");
			alert("YOO LOSE :(")
		}
	}
	else if (userChoise == 3)
	{
		if (machineChoise == 1)
		{
			alert("you choise Scissors, the computer choise Rock");
			alert("YOO LOSE :(")		
		}
		else if (machineChoise == 2)
		{
			alert("you choise Scissors, the computer choise Paper");
			alert("You won :) !!");
		}
	}
}
// var userChoise = prompt("Elige \nPiedra = 1 \nPapel = 2  \nTijera = 3");ff	
// var machineChoise = randomNumber(1,2);
// var rock = document.getElementById("rock");
// alert("user " + userChoise + " computer " + machineChoise);