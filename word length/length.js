var print = function(msg) {
	document.getElementById("output").innerHTML = "Length is " + msg;
}
document.getElementById("button").onclick = function(event) {
		print(document.getElementById('word').value.length);
	} 
