// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.
var alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var numberList = ['1','2','3','4','5','6','7','8','9','0'];

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
				if (document.getElementById('globeSpace').checked === true) {
					document.getElementById('outputText').innerHTML += ":globe_with_meridians: ";
				}
				else if (document.getElementById('fireSpace').checked === true) {
					document.getElementById('outputText').innerHTML += ":fire: ";
				}
				else if (document.getElementById('clapSpace').checked === true) {
					document.getElementById('outputText').innerHTML += ":clap: ";
				}
				else if (document.getElementById('customSpace').checked === true) {
					var customEmoji = document.getElementById('customSpaceText');
					document.getElementById('outputText').innerHTML += customEmoji+" ";
				}
				else {
					document.getElementById('outputText').innerHTML += ":skull: ";
				}
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
				document.getElementById('outputText').innerHTML += ":small_blue_diamond: ";
			}
			else if (letter === ".") {
				document.getElementById('outputText').innerHTML += ":diamond_shape_with_a_dot_inside:  ";
			}
			else if (letter === ",") {
				document.getElementById('outputText').innerHTML += ":small_orange_diamond: ";
			}
			else if (numberList.includes(letter) === true) {
				console.log('hi');
				var newLetter = NumberToString(letter);
				document.getElementById('outputText').innerHTML += ":"+newLetter+": ";
			}
			else if (alphabet.includes(letter) === true) {
				document.getElementById('outputText').innerHTML += ":regional_indicator_"+letter+": ";
			}
			else {
				document.getElementById('outputText').innerHTML += ":skull: ";
			}
		}
		CheckCount();
	}
}

function CheckCount() {
	var outputLength = document.getElementById('outputText').value;
	console.log(outputLength.length);
	if (outputLength.length <= 2000) {
		document.getElementById('limitChecker').innerHTML = outputLength.length+"/2000";
	}
	else {
		document.getElementById('limitChecker').innerHTML = outputLength.length+'/2000 <span style="color:red;">Too many letters for Discord!</span>';
	
	}
}

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
