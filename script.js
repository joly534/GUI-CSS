let text = document.getElementById('text');
let vue = document.getElementById('vue');
let rgbcolors = ["125","125","125"];
let textShadows = ["5","5","5"];

function validate(){
	vue.innerHTML='';
	vue.append(text.value);
}

function resetInput(){
	text.value='';
}

function changeFontSize(valueSizeFont){
	let resultat= document.getElementById('resultFontSize');
	vue.style.fontSize = (valueSizeFont).toString() + 'px';
	resultat.innerHTML = (valueSizeFont).toString() + 'px';
}

function changeFontFamily(valueFamilyFont){
	vue.style.fontFamily = valueFamilyFont;
}

function changeFontWeight(valueWeightFont){
	vue.style.fontWeight = valueWeightFont;
}

/** FONCTIONS DE PARAMETRAGE DE LA COULEUR DU TEXTE */
function setRgbColorFontOne(valueColorFont){
	rgbcolors.splice(0,1,valueColorFont);
}
function setRgbColorFontTwo(valueColorFont){
	rgbcolors.splice(1,1,valueColorFont);
}
function setRgbColorFontThree(valueColorFont){
	rgbcolors.splice(2,1,valueColorFont);	
}
function changeFontRgbColor(){
	let rgb = document.getElementById('RGB');
	rgb.innerHTML = "rgb(" + rgbcolors[0] + "," + rgbcolors[1] + "," + rgbcolors[2] + ")";
	vue.style.color ="rgb(" + rgbcolors[0] + "," + rgbcolors[1] + "," + rgbcolors[2] + ")";
}
/** FIN */

/** FONCTIONS DE PARAMETRAGE DU TEXT-SHADOW */
function setTextShadowX(valueShadowX){
	textShadows.splice(0,1,valueShadowX);
}
function setTextShadowY(valueShadowY){
	textShadows.splice(1,1,valueShadowY);
}
function setTextShadowBlur(valueShadowBlur){
	textShadows.splice(2,1,valueShadowBlur);
}
function changeTextShadow(){
	let text_shadow = document.getElementById('text_shadow');
	text_shadow.innerHTML = '"' + textShadows[0] + 'px ' + textShadows[1] + 'px ' + textShadows[2] + 'px black"';
	vue.style.textShadow = '"' + textShadows[0] + 'px ' + textShadows[1] + 'px ' + textShadows[2] + 'px black"';
	console.log(textShadows);
}
/** FIN */

function update() {
	changeFontRgbColor();
	changeTextShadow();
window.requestAnimationFrame(update);
}

window.requestAnimationFrame(update);