let ongletBackgroundColor = document.getElementById('onglet_background_color');
let ongletBoxMargin = document.getElementById('onglet_box_margin');
let ongletBowPadding = document.getElementById('onglet_box_padding');
let ongletBoxShadow = document.getElementById('onglet_box_shadow');

ongletBackgroundColor.style.display = "block";
ongletBoxMargin.style.display = "none";
ongletBowPadding.style.display = "none";
ongletBoxShadow.style.display = "none";

function showOngletBackgroundColor() {
    ongletBackgroundColor.style.display = "block";
    ongletBoxMargin.style.display = "none";
    ongletBowPadding.style.display = "none";
    ongletBoxShadow.style.display = "none";
}
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
	let backcol = css.innerHTML = "background-color : rgba(" + backgroundColors[0] + "," + backgroundColors[1] + "," + 
        backgroundColors[2] + "," + backgroundColors[3] + ");";
	addCSSMultiple(backcol,9);
	vue.style.backgroundColor ="rgba(" + backgroundColors[0] + "," + backgroundColors[1] + "," + backgroundColors[2] + "," +
        backgroundColors[3] + ")";
}
/** FIN */

/** MARGIN */
function setMarginTop(valueMarginTop) {
    marge.splice(0,1,valueMarginTop);
}
function setMarginRight(valueMarginRight) {
    marge.splice(1,1,valueMarginRight);
}
function setMarginBottom(valueMarginBottom) {
    marge.splice(2,1,valueMarginBottom);
}
function setMarginLeft(valueMarginLeft) {
    marge.splice(3,1,valueMarginLeft);
}
function changeMargin(){
    let valueMargin = css.innerHTML = "margin: " + marge[0] + 'px ' + marge[1] + 'px ' + marge[2] + 'px ' + marge[3] + 'px' + ';';
    addCSSMultiple(valueMargin,10);
    vue.style.margin = marge[0] + 'px '  + marge[1] + 'px '  + marge[2] + 'px ' + marge[3] + 'px';
}
/** FIN */

/** PADDING */
function setPaddingTop(valuePaddingTop) {
    padding.splice(0,1,valuePaddingTop);
}
function setPaddingRight(valuePaddingRight) {
    padding.splice(1,1,valuePaddingRight);
}
function setPaddingBottom(valuePaddingBottom) {
    padding.splice(2,1,valuePaddingBottom);
}
function setPaddingLeft(valuePaddingLeft) {
    padding.splice(3,1,valuePaddingLeft);
}
function changePadding(){
    let valuePadding = css.innerHTML = "padding: " + padding[0] + 'px ' + padding[1] + 'px ' + padding[2] + 'px ' + padding[3] + 'px' + ';';
    addCSSMultiple(valuePadding,11);
    vue.style.padding = padding[0] + 'px '  + padding[1] + 'px '  + padding[2] + 'px '  + padding[3] + 'px';
}
/** FIN */

/** BOX SHADOW */
function setBoxShadowX(valueShadowX){
	boxShadows.splice(0,1,valueShadowX);
}
function setBoxShadowY(valueShadowY){
	boxShadows.splice(1,1,valueShadowY);
}
function setBoxShadowBlur(valueShadowBlur){
	boxShadows.splice(2,1,valueShadowBlur);
}
function setColorBoxShadow(valueColorBoxShadow){
	boxShadows.splice(3,1,valueColorBoxShadow)
}
function changeBoxShadow(){
	let bs = css.innerHTML = 'box-shadow: ' + boxShadows[0] + 'px ' + boxShadows[1] + 'px ' + boxShadows[2] + 'px ' + boxShadows[3] + ';';
	addCSSMultiple(bs,12);
	vue.style.boxShadows = boxShadows[0] + 'px ' + boxShadows[1] + 'px ' + boxShadows[2] + 'px ' + boxShadows[3];
}
/** FIN */