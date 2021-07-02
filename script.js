let text = document.getElementById('text');
let vue = document.getElementById('vue');
let fontFamily = [];
let fontSize = [];
let weight = [];
let alignement = [];
let border = [];
let fontRgbcolors = ["125","125","125"];
let backgroundColors = ["255" , "255" , "255"];
let textShadows = ["5","5","5"];

function validate(){
	vue.innerHTML='';
	vue.append(text.value);
}

function resetInput(){
	text.value='';
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
	
window.requestAnimationFrame(update);
}

window.requestAnimationFrame(update);