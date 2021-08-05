
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



/** BORDER STYLE */
function setBorderStyle(valueBorderStyle){
    border.splice(1,1,valueBorderStyle);
}
function changeBorderStyle(){
    let bs = css.innerHTML = 'border-style : ' + border[1] + ';';
	addCSS(bs,6,1);
    vue.style.borderStyle = border[1];
}

/** BORDER WIDTH */
function setBorderWidth(valueBorderWidth){
	border.splice(0,1,valueBorderWidth);
}
function changeBorderWidth(){
    let bw = css.innerHTML = 'border-width : ' + border[0] + 'px;';
	addCSS(bw,7,1);
    vue.style.borderWidth = border[0] + 'px"';
}
/** FIN */

/** BORDER COLOR */
function setBorderColorOne(valueborderColorOne){
    border.splice(2,1,valueborderColorOne);
}

function setBorderColorTwo(valueborderColorTwo){
    border.splice(3,1,valueborderColorTwo);    
}

function setBorderColorThree(valueborderColorThree){
    border.splice(4,1,valueborderColorThree);    
}
function changeBorderColor(){
	let bc = css.innerHTML = "border-color : rgb(" + border[2] + "," + border[3] + "," + border[4] + ");";
	addCSSMultiple(bc,8,1);
	vue.style.borderColor ="rgb(" + border[2] + "," + border[3] + "," + border[4] + ")";
}
/** FIN */


