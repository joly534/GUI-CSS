//** FONCTION DE CHANGEMENT DE POLICE D'ECRITURE */
function setFontFamily(valueFamilyFont){
	fontFamily.splice(0,1,valueFamilyFont);
}
function changeFontFamily(){
	let cssInfos = document.getElementById('css_font_family');
	cssInfos.innerHTML = 'font-family: ' + fontFamily[0] + ';';
	vue.style.fontFamily = fontFamily[0];
}
/** FIN */

//** FONCTION DE CHANGEMENT DE TAILLE DE POLICE */
function setFontSize(valueSizeFont){
    fontSize.splice(0,1,valueSizeFont);
}
function changeFontSize(){
	let cssInfos= document.getElementById('css_font_size');
	cssInfos.innerHTML = 'font-size :' + fontSize[0] +  'px';
	vue.style.fontSize = fontSize[0] + 'px';
}
/** FIN */

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