let ongletBackgroundColor = document.getElementById('onglet_background_color');
let ongletBoxMargin = document.getElementById('onglet_box_margin');
let ongletBowPadding = document.getElementById('onglet_box_padding');
let ongletBoxShadow = document.getElementById('onglet_box_shadow');

ongletBackgroundColor.style.display = "block";
ongletBoxMargin.style.display = "none";
ongletBowPadding.style.display = "none";
ongletBoxShadow.style.display = "none";

function showOngletBoxMargin(){
    ongletBackgroundColor.style.display = "none";
    ongletBoxMargin.style.display = "block";
    ongletBowPadding.style.display = "none";
    ongletBoxShadow.style.display = "none";
}
function showOngletBoxPadding(){
    ongletBackgroundColor.style.display = "none";
    ongletBoxMargin.style.display = "none";
    ongletBowPadding.style.display = "block";
    ongletBoxShadow.style.display = "none";
}
function showOngletBoxShadow(){
    ongletBackgroundColor.style.display = "none";
    ongletBoxMargin.style.display = "none";
    ongletBowPadding.style.display = "none";
    ongletBoxShadow.style.display = "block";
}


/** BACKGROUND COLOR */
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
	let backcol = css.innerHTML = "background-color : rgba(" + backgroundColors[0] + "," + backgroundColors[1] + "," + backgroundColors[2] + "," + backgroundColors[3] + ");";
	addCSSMultiple(backcol,9,1);
	vue.style.backgroundColor ="rgba(" + backgroundColors[0] + "," + backgroundColors[1] + "," + backgroundColors[2] + "," + backgroundColors[3] + ")";
}
/** FIN */