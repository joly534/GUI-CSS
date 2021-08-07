let text = document.getElementById('text');
let id = document.getElementById('identification');
let classe = document.getElementById('classe');
let vue = document.getElementById('vue');
let css = document.getElementById('pureCSS');

let balise;

let fontFamily = [];
let fontSize = [];
let weight = [];
let borderS = [];
let borderW = [];
let borderC = [];
let fontRgbcolors = [];
let textShadows = [];
let alignement = [];
let backgroundColors = [];
let marge = [];
let padding = [];
let boxShadows = [];

let codeCSS = [];

function validate(){
	vue.innerHTML = '';
	vue.append(text.value);
}

function resetInput(){
	text.value = '';
	id.value = '';
	classe.value = '';
	vue.innerHTML = '';
	console.log(codeCSS);
	codeCSS = [];
	showCss();
	console.log(codeCSS);
}


function update() {
	changeFontFamily();
	changeFontSize();
	changeFontWeight();
	changeFontRgbColor();
	changeTextShadow();
	changeTextAlign();
	changeBorderWidth();
	changeBorderStyle();
	changeBorderColor();
	changeBackgroundColor();
	changeMargin();	
	changePadding();	
	changeBoxShadow();	
	showCss();
window.requestAnimationFrame(update);
}

window.requestAnimationFrame(update);