var time = 0;
var running = 0;

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

function reset(){
			running = 0;
			time = 0;
			document.getElementById("start").innerHTML = "Start";
			document.getElementById("output").innerHTML = "00:00:00";
}

function count(){
	if(running == 1){
		setTimeout(function(){
			time++;
			var mins = Math.floor(time/10/60);
			var secs = Math.floor(time/10);
			var tenths = time % 10;
				// if these have a value of less than 10, add a 0 to the beginning as a placeholder:
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