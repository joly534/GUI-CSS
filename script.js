let text = document.getElementById('text');
let id = document.getElementById('identification');
let classe = document.getElementById('classe');
let balise;
let vue = document.getElementById('vue');
let fontFamily = [];
let fontSize = [];
let weight = [];
let alignement = [];
let border = [];
let fontRgbcolors = ["0","0","0"];
let backgroundColors = ["255" , "255" , "255"];
let textShadows = ["5","5","5"];
let css = document.getElementById('pureCSS');
let codeCSS = [];


function validate(){
	vue.innerHTML = '';
	vue.append(text.value);
}

function resetInput(){
	text.value = '';
	id.value = '';
	classe.value = '';
}

function addCSS(value, index, number){
		codeCSS.splice(index, number, value);
}

function addCSSMultiple(value, index, number){
	codeCSS.splice(index, number, value);
}

function update() {
	changeFontFamily();
	changeFontSize();
	changeFontWeight();
	changeFontRgbColor();
	changeTextShadow();
	changeTextAlign();
	changeBackgroundColor();
	changeBorderWidth();
	changeBorderStyle();
	changeBorderColor();	
	showCss();
	
window.requestAnimationFrame(update);
}

window.requestAnimationFrame(update);