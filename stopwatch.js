var clock = 0;
var running = false;
var startBtn = document.getElementById("start");
var output = document.getElementById("output");

function start(){
	if(running === false){								
		running = true;
		count();
		startBtn.innerHTML = "Pause";
	}else{		
		running = false;														
		startBtn.innerHTML = "Resume";
	}
}

function reset(){
			running = false;
			clock = 0;
			startBtn.innerHTML = "Start";
			output.innerHTML = "00:00:00";
}

function count(){
	if(running === true){
		setTimeout(function(){
			clock++;
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
			output.innerHTML = mins + ":" + secs + ":" + "0" + tenths;
			count();
		}, 100,);
	}
}

