// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
function SubmitText() {
	console.log('Submitted!');
	var inputText = document.getElementById('inputText').value.toLowerCase();
	var inputLength = inputText.length;
	if (!inputText) {
		alert('There is nothing in the input field!\n Do not let me go hungry, now!');
		return;
	}
	else {
		console.log('Text vored');
		document.getElementById('outputText').innerHTML = "";
		document.getElementById('outputText').placeholder = "calculating..";
		for (var i=0;i<inputLength;i++) {
			console.log('letter ' + (i+1));
			var letter = inputText.charAt(i);
			if (letter === " ") {
				document.getElementById('outputText').innerHTML += ":fire: ";
			}
			else if (letter === "*") {
				document.getElementById('outputText').innerHTML += ":asterisk: ";
			}
			else if (letter === "?") {
				document.getElementById('outputText').innerHTML += ":question: ";
			}
			else if (letter === "!") {
				document.getElementById('outputText').innerHTML += ":exclamation: ";
			}
			else if (letter === "'") {
				document.getElementById('outputText').innerHTML += ":small_orange_diamond: ";
			}
			else if (letter === ".") {
				document.getElementById('outputText').innerHTML += ":diamond_shape_with_a_dot_inside:  ";
			}
			else if (letter === ",") {
				document.getElementById('outputText').innerHTML += ":small_blue_diamond: ";
			}
			else if (letter != " "||"*"||"?"||"!") {
				document.getElementById('outputText').innerHTML += ":regional_indicator_"+letter+": ";
			}
		}
	}
}
