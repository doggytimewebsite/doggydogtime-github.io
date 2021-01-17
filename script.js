var secondsRemaining;
var intervalHandle;

function resetPage(){
	document.getElementById("inputArea").style.display = "block";
}

function clock(){
	var timeDisplay = document.getElementById("time");

	// formats seconds into mm:ss
	var min = Math.floor(secondsRemaining / 60);
	var sec = secondsRemaining - (min * 60);

	// add zero before number if seconds is below than 10.
	if (sec < 10) {
		sec = "0" + sec;
	}

	// concatenate w/ colon
	var message = min.toString() + ":" + sec;

	// now change the display
	timeDisplay.innerHTML = message;

	if (secondsRemaining === 0){
		alert("Congrats! You did it!");
		clearInterval(intervalHandle);
		resetPage();
	}

	// subtract from seconds remaining 
	secondsRemaining--;

}

function startCountdown(){

	// assign the value of minutes to a variable.
	var minutes = document.getElementById("minutes").value;
	
	// checks if the input is a number
	if (isNaN(minutes)){
		alert("Please enter a number");
		return; // stops function if true
	}

	// determines seconds
	secondsRemaining = minutes * 60;
	
	// calls the clock function every second
	intervalHandle = setInterval(clock, 1000);

	// hide the form
	document.getElementById("inputArea").style.display = "none";

}

window.onload = function(){

	// set the textbox input to "min"
	var inputMinutes = document.createElement("input");
	inputMinutes.setAttribute("id", "minutes");
	inputMinutes.setAttribute("type", "text");
	
	// create a button
	var startButton = document.createElement("input");
	startButton.setAttribute("type","button");
	startButton.setAttribute("value","Start Timer");
	startButton.onclick = function(){
        startCountdown();
	};

	
	document.getElementById("inputArea").appendChild(inputMinutes);
	document.getElementById("inputArea").appendChild(startButton)		

}

