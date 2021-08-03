let ongletBackgroundColor = document.getElementById('onglet_background_color');
let ongletBorderStyle = document.getElementById('onglet_border_style');
let ongletBorderWidth = document.getElementById('onglet_border_width');
let ongletBorderColor = document.getElementById('onglet_border_color');


ongletBackgroundColor.style.display = "block";
ongletBorderStyle.style.display = "none";
ongletBorderWidth.style.display = "none";
ongletBorderColor.style.display = "none";

function showOngletBackgroundColor(){
	ongletBackgroundColor.style.display = "block";
	ongletBorderStyle.style.display = "none";
	ongletBorderWidth.style.display = "none";
	ongletBorderColor.style.display = "none";
}

function showOngletBorder(){
	ongletBackgroundColor.style.display = "none";
	ongletBorderStyle.style.display = "block";
	ongletBorderWidth.style.display = "none";
	ongletBorderColor.style.display = "none";
}

function showOngletBorderWidth(){
	ongletBackgroundColor.style.display = "none";
	ongletBorderStyle.style.display = "none";
	ongletBorderWidth.style.display = "block";
	ongletBorderColor.style.display = "none";
}

function showOngletBorderColor(){
	ongletBackgroundColor.style.display = "none";
	ongletBorderStyle.style.display = "none";
	ongletBorderWidth.style.display = "none";
	ongletBorderColor.style.display = "block";
}

/** FONCTIONS DE PARAMETRAGE DU BACKGROUND COLOR */
function setRgbBackgroundColorOne(valueBackgroundColorOne){
	backgroundColors.splice(0,1,valueBackgroundColorOne);
}

function setRgbBackgroundColorTwo(valueBackgroundColorTwo){
	backgroundColors.splice(1,1,valueBackgroundColorTwo);
}

function setRgbBackgroundColorThree(valueBackgroundColorThree){
	backgroundColors.splice(2,1,valueBackgroundColorThree);
}

function setRgbBackgroundColorOpacity(valueBackgroundColorThree){
	backgroundColors.splice(3,1,valueBackgroundColorThree);
}

function changeBackgroundColor(){
	let bc = css.innerHTML = "background-color : rgba(" + backgroundColors[0] + "," + backgroundColors[1] + "," + backgroundColors[2] + "," + backgroundColors[3] + ");";
	
	vue.style.backgroundColor ="rgba(" + backgroundColors[0] + "," + backgroundColors[1] + "," + backgroundColors[2] + "," + backgroundColors[3] + ")";
}
/** FIN */

/** FONCTIONS DE PARAMETRAGE DU BORDER */
function setBorderWidth(valueBorderWidth){
	border.splice(0,1,valueBorderWidth);
}

function setBorderStyle(valueBorderStyle){
    border.splice(1,1,valueBorderStyle);
}

function setBorderColorOne(valueborderColorOne){
    border.splice(2,1,valueborderColorOne);
}

function setBorderColorTwo(valueborderColorTwo){
    border.splice(3,1,valueborderColorTwo);    
}

function setBorderColorThree(valueborderColorThree){
    border.splice(4,1,valueborderColorThree);    
}

function changeBorderWidth(){
    css.innerHTML = 'border-width : ' + border[0] + 'px;';
    vue.style.borderWidth = '"' + border[0] + 'px"';
}

function changeBorderStyle(){
    css.innerHTML = 'border-style : ' + border[1] + ';';
    vue.style.borderStyle = border[1];
}

function changeBorderColor(){
	css.innerHTML = "border-color : rgb(" + border[2] + "," + border[3] + "," + border[4] + ");";
	vue.style.borderColor ="rgb(" + border[2] + "," + border[3] + "," + border[4] + ")";
}
/** FIN */