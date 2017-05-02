/*
Update 2: fixed issue where it gives a undeclared second.
*/

var clickTime; var createTime; var timePassed;

var borderRad;

var clickCounter = 0;

makeBox();

function makeBox() {

	//speed up the random numbers by through 0.0 - 4.0
	var x = Math.random()*0*1000;

	var borderRad = Math.random()*20;

	var topMargin = Math.random()*650;
	var leftMargin = Math.random()*800;

	//timeout function for x which is defined above
	setTimeout(function() {

		createTime = Date.now();

		document.getElementById("box");

		if (borderRad > 15) {
			document.getElementById("box").innerHTML = "<img src='https://cdn1.iconfinder.com/data/icons/angry-icons-by-femfoyou/117/yellowbird.png'>";
			document.getElementById("box").style.marginTop = topMargin + "px";
			document.getElementById("box").style.marginLeft = leftMargin + "px";

		} else {
			document.getElementById("box").innerHTML = "<img src='https://cdn1.iconfinder.com/data/icons/angry-icons-by-femfoyou/92/greenbird.png'>";
			document.getElementById("box").style.marginTop = topMargin + "px";
			document.getElementById("box").style.marginLeft = leftMargin + "px";


		}

		document.getElementById("box").style.visibility = "visible";

	}, x);

}

    //after each click
    document.getElementById("box").onclick=function(){

	//After Each Click
	clickTime = Date.now();

	//calculate timePassed
	timePassed = (clickTime - createTime)/1000;

	//update html to display timePassed
	document.getElementById("time").innerHTML = "(" + timePassed + " seconds)";

	//increment the counter, you click the shape once it adds +1
	clickCounter = clickCounter + 1;
	document.getElementById("counter").innerHTML = "Click count: " + clickCounter;

	//hide box
	this.style.visibility = "hidden";

	makeBox();


}


function getRandomColor() {

	 var letters = '0123456789ABCDEF'.split('');
	 var color = '#';

	 for (var i = 0; i < 6; i++ ) {
		color += letters[Math.floor(Math.random() * 16)];
	 }

	return color;
}

// start and stop button to test yourself

function changeValue() {
  document.getElementById("yourTime").innerHTML = "Timer (seconds): " + ++value;
}

var timerInterval = null;
function start () {
  stop();
  value = 0;
  timerInterval = setInterval(changeValue, 1000);
}
var stop = function() {
  clearInterval(timerInterval );
}
