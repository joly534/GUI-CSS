let text = document.getElementById('text');
let vue = document.getElementById('vue');


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

function changeFontColor(valueColorFont){
	
	vue.style.color = valueColorFont;
}

// function changeFontRgbColorOne(valueColorFont){
// 	let rgbOne = (valueColorFont).toString();
// 	return rgbOne;
// }
// function changeFontRgbColorTwo(valueColorFont){
// 	let rgbTwo = (valueColorFont).toString();
// 	return rgbTwo;
// }
// function changeFontRgbColorThree(valueColorFont){
// 	let rgbThree = (valueColorFont).toString();
// 	return rgbThree;
// }
// function changeFontRgbColor(){
// 	let rgbOne = changeFontRgbColorOne(valueColorFont);
// 	let rgbOne = changeFontRgbColorTwo(valueColorFont);
// 	let rgbOne = changeFontRgbColorThree(valueColorFont);
// 	vue.style.color ="rgb(" + rgbOne + "," + rgbTwo + "," + rgbThree + ")";
// }


function update() {
}
update()