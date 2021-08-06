
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
    borderS.splice(0,1,valueBorderStyle);
}
function changeBorderStyle(){
    let bstyle = css.innerHTML = 'border-style : ' + borderS[0] + ';';
	addCSS(bstyle,6);
    vue.style.borderStyle = borderS[0];
}

/** BORDER WIDTH */
function setBorderWidth(valueBorderWidth){
	borderW.splice(0,1,valueBorderWidth);
}
function changeBorderWidth(){
    let bw = css.innerHTML = 'border-width : ' + borderW[0] + 'px;';
	addCSS(bw,7);
    vue.style.borderWidth = borderW[0] + 'px';
}
/** FIN */

/** BORDER COLOR */
function setBorderColorOne(valueborderColorOne){
    borderC.splice(0,1,valueborderColorOne);
}

function setBorderColorTwo(valueborderColorTwo){
    borderC.splice(1,1,valueborderColorTwo);    
}

function setBorderColorThree(valueborderColorThree){
    borderC.splice(2,1,valueborderColorThree);    
}
function changeBorderColor(){
	let bc = css.innerHTML = "border-color : rgb(" + borderC[0] + "," + borderC[1] + "," + borderC[2] + ");";
	addCSSMultiple(bc,8);
	vue.style.borderColor ="rgb(" + borderC[0] + "," + borderC[1] + "," + borderC[2] + ")";
}
/** FIN */


