function switchToAbout()  {
  document.getElementById("home").style.display = 'none';
  document.getElementById("aboutme").style.display = 'block';

  document.getElementById("aboutmeBtn").style.display = 'none';
  document.getElementById("homeBtn").style.display = 'block';
}
function switchToHome()  {
  document.getElementById("aboutme").style.display = 'none';
  document.getElementById("home").style.display = 'block';

  document.getElementById("homeBtn").style.display = 'none';
  document.getElementById("aboutmeBtn").style.display = 'block';
}

const words = ["Developer.", "Engineer.", "Gamer.", "Lazy.", "Bored."];
let i = 0;
let timer;

function typingEffect() {
	let word = words[i].split("");
	var loopTyping = function() {
		if (word.length > 0) {
			document.getElementById('word').innerHTML += word.shift();
		} else {
			deletingEffect();
			return false;
		};
		timer = setTimeout(loopTyping, 400);
	};
	loopTyping();
};

function deletingEffect() {
	let word = words[i].split("");
	var loopDeleting = function() {
		if (word.length > 0) {
			word.pop();
			document.getElementById('word').innerHTML = word.join("");
		} else {
			if (words.length > (i + 1)) {
				i++;
			} else {
				i = 0;
			};
			typingEffect();
			return false;
		};
		timer = setTimeout(loopDeleting, 200);
	};
	loopDeleting();
};
window.onload = function() {
    document.body.className = '';
    typingEffect();
};
window.ontouchmove = function() {
    return false;
};
window.onorientationchange = function() {
    document.body.scrollTop = 0;
};
