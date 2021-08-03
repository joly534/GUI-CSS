
let ongletBorderStyle = document.getElementById('onglet_border_style');
let ongletBorderWidth = document.getElementById('onglet_border_width');
let ongletBorderColor = document.getElementById('onglet_border_color');



ongletBorderStyle.style.display = "block";
ongletBorderWidth.style.display = "none";
ongletBorderColor.style.display = "none";


function showOngletBorderStyle(){
	ongletBorderStyle.style.display = "block";
	ongletBorderWidth.style.display = "none";
	ongletBorderColor.style.display = "none";
}

function showOngletBorderWidth(){
	ongletBorderStyle.style.display = "none";
	ongletBorderWidth.style.display = "block";
	ongletBorderColor.style.display = "none";
}

function showOngletBorderColor(){
	ongletBorderStyle.style.display = "none";
	ongletBorderWidth.style.display = "none";
	ongletBorderColor.style.display = "block";
}


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