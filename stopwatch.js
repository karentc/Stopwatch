// First things first, create some variables:
var clock = 0;
var running = 0;





// Secondly, this function will operate my start/pause button:
function start(){
	if(running == 0){								
		running = 1;
		count();
		document.getElementById("start").innerHTML = "Pause";
	}else{		
		running = 0;														
		document.getElementById("start").innerHTML = "Resume";
	}
}
// Basically, when 'start' is clicked: if the clock is NOT running:
 // (a) the clock will begin to run
// (b) the count function will be called, and 
// (c) getelementbyID will change my button HTML to "pause"

// If it IS running, then:
// (a) running will be set to 0 (turned off), and
// (b) getelementbyID will change my button HTML to "resume"





// Ok so next, this function will operate my reset button:
function reset(){
			running = 0;
			clock = 0;
			document.getElementById("start").innerHTML = "Start";
			document.getElementById("output").innerHTML = "00:00:00";
}
// Basically, this (a) sets the clock back to zero, and tells it that its NOT running, and
// (b) changes all my HTML back to its starting points





// Lastly, this function will 'count'
function count(){
	if(running == 1){
		setTimeout(function(){
			clock++;
			// some variables to start the count 
			var mins = Math.floor(clock/10/60);
			var secs = Math.floor(clock/10);
			var tenths = clock % 10;
				// if these have a value of less than 10, this will add a 0 to the beginning as a placeholder:
				if(mins < 10){
					mins = "0" + mins;
				}
				if(secs < 10){
					secs = "0" + secs;
				}
			document.getElementById("output").innerHTML = mins + ":" + secs + ":" + "0" + tenths;
			count();
		}, 100,);
	}
}
// If its running, we call a funtion (setTimeout) which has two parameters:
		// (a) the function called
		// (b) how long to wait to call it (100 ms)
// Then, (a) increment the timer
		// (b) update the output 
		// (c) call the increment function again
