
function onAlert() {
	window.alert("Hello there!");

}

function changeColor() {
	var newCol = randColor();
	document.getElementById("name").style.color = "" + newCol;
}

function randColor() {
	var r = Math.floor(Math.random() * 100) + 150;
	var g = Math.floor(Math.random() * 100) + 150;
	var b = Math.floor(Math.random() * 100) + 150;
	var newCol = "rgb(" + r + "," + g + "," + b + ")";
	return newCol;

}






