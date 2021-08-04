let ongletFontFamily = document.getElementById('onglet_font_family');
let ongletFontSize = document.getElementById('onglet_font_size');
let ongletFontWeight = document.getElementById('onglet_font_weight');
let ongletFontColor = document.getElementById('onglet_font_color');
let ongletTextShadow = document.getElementById('onglet_text_shadow');
let ongletTextAlign = document.getElementById('onglet_text_align');

ongletFontFamily.style.display = "block";

function showOngletFontFamily(){
	ongletFontFamily.style.display = "block";
	ongletFontSize.style.display = "none";
	ongletFontWeight.style.display = "none";
	ongletFontColor.style.display = "none";
	ongletTextShadow.style.display = "none";
	ongletTextAlign.style.display = "none";
}

function showOngletFontSize(){
	ongletFontFamily.style.display = "none";
	ongletFontSize.style.display = "block";
	ongletFontWeight.style.display = "none";
	ongletFontColor.style.display = "none";
	ongletTextShadow.style.display = "none";
	ongletTextAlign.style.display = "none";
}

function showOngletFontWeight(){
	ongletFontFamily.style.display = "none";
	ongletFontSize.style.display = "none";
	ongletFontWeight.style.display = "block";
	ongletFontColor.style.display = "none";
	ongletTextShadow.style.display = "none";
	ongletTextAlign.style.display = "none";
}

function showOngletFontColor(){
	ongletFontFamily.style.display = "none";
	ongletFontSize.style.display = "none";
	ongletFontWeight.style.display = "none";
	ongletFontColor.style.display = "block";
	ongletTextShadow.style.display = "none";
	ongletTextAlign.style.display = "none";
}

function showOngletTextShadow(){
	ongletFontFamily.style.display = "none";
	ongletFontSize.style.display = "none";
	ongletFontWeight.style.display = "none";
	ongletFontColor.style.display = "none";
	ongletTextShadow.style.display = "block";
	ongletTextAlign.style.display = "none";
}

function showOngletTextAlign(){
	ongletFontFamily.style.display = "none";
	ongletFontSize.style.display = "none";
	ongletFontWeight.style.display = "none";
	ongletFontColor.style.display = "none";
	ongletTextShadow.style.display = "none";
	ongletTextAlign.style.display = "block";
}

//** FONCTION DE LA POLICE D'ECRITURE */
function setFontFamily(valueFamilyFont){
	fontFamily.splice(0,1,valueFamilyFont);
}
function changeFontFamily(){
	let ff = css.innerHTML = 'font-family: ' + fontFamily[0] + ';';
	addCSS(ff, 0, 1);
	vue.style.fontFamily = fontFamily[0];
}
/** FIN */

//** FONCTION DE LA TAILLE DE POLICE */
function setFontSize(valueSizeFont){
    fontSize.splice(0,1,valueSizeFont);
}
function changeFontSize(){
	let fs = css.innerHTML = 'font-size: ' + fontSize[0] +  'px;';
	addCSS(fs,1,1);
	vue.style.fontSize = fontSize[0] + 'px';
}
/** FIN */

//** FONCTION DE L'EPAISSEUR DE POLICE */
function setFontWeight(valueWeightFont){
	weight.splice(0,1,valueWeightFont);
}
function changeFontWeight(){
	let fw = css.innerHTML = "font-weight: " + weight[0] + ';';
	addCSS(fw,2,1);
	vue.style.fontWeight = weight[0];
}
/** FIN */

/** FONCTIONS DE LA COULEUR DU TEXTE */
function setRgbColorFontOne(valueColorFont){
	fontRgbcolors.splice(0,1,valueColorFont);
}
function setRgbColorFontTwo(valueColorFont){
	fontRgbcolors.splice(1,1,valueColorFont);
}
function setRgbColorFontThree(valueColorFont){
	fontRgbcolors.splice(2,1,valueColorFont);	
}
function changeFontRgbColor(){
	let fc = css.innerHTML = "font-color: rgb(" + fontRgbcolors[0] + "," + fontRgbcolors[1] + "," + fontRgbcolors[2] + ");";
	addCSSMultiple(fc, 3, 1);
	vue.style.color ="rgb(" + fontRgbcolors[0] + "," + fontRgbcolors[1] + "," + fontRgbcolors[2] + ")";
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
function setColorTextShadow(valueColorTextShadow){
	textShadows.splice(3,1,valueColorTextShadow)
}
function changeTextShadow(){
	let ts = css.innerHTML = 'text-shadow: ' + textShadows[0] + 'px ' + textShadows[1] + 'px ' + textShadows[2] + 'px ' + textShadows[3] + ';';
	addCSSMultiple(ts, 4, 1);
	vue.style.textShadow = + textShadows[0] + 'px ' + textShadows[1] + 'px ' + textShadows[2] + 'px ' + textShadows[3];
}
/** FIN */

/** FONCTIONS DE PARAMETRAGE DU TEXT-ALIGN */
function setTextAlign(valueTextAlign){
	alignement.splice(0,1,valueTextAlign);
}
function changeTextAlign(){
	let ta = css.innerHTML = "text-align: " + alignement[0] + ';';
	addCSS (ta, 5, 1);
	vue.style.textAlign = alignement[0]
}

/** FIN */