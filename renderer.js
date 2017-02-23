// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
function SubmitText() {
	console.log('Submitted!');
	var inputText = document.getElementById('inputText').value.toLowerCase();
	var inputLength = inputText.length;
	if (!inputText) {
		alert('There is nothing in the input field!\nDo not let me go hungry, now!');
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
			}/*
			else if (letter === "1"||"2"||"3"||"4"||"5"||"6"||"7"||"8"||"9"||"0") {
				console.log('hi');
				var newLetter = NumberToString(letter);
				document.getElementById('outputText').innerHTML += ":"+newLetter+": ";
			}*/
			else if (letter != " "||"*"||"?"||"!"||"'"||"."||","/*||"1"||"2"||"3"||"4"||"5"||"6"||"7"||"8"||"9"||"0"*/) {
				document.getElementById('outputText').innerHTML += ":regional_indicator_"+letter+": ";
			}
		}
	}
}
/*
var NumberToString = function (number) {
	if (number === '1') {
		return 'one';
	}
	else if (number === '2') {
		return 'two';
	}
	else if (number === '3') {
		return 'three';
	}
	else if (number === '4') {
		return 'four';
	}
	else if (number === '5') {
		return 'five';
	}
	else if (number === '6') {
		return 'six';
	}
	else if (number === '7') {
		return 'seven';
	}
	else if (number === '8') {
		return 'eight';
	}
	else if (number === '9') {
		return 'nine';
	}
	else if (number === '0') {
		return 'zero';
	}
}
*/