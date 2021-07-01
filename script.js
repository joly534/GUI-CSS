let text = document.getElementById('text');
let vue = document.getElementById('vue');
let texte = text.value;

let value = document.getElementById('value')

vue.append(texte);

function setFontSize(valueSizeFont){
	let size = valueSizeFont;
	console.log(size);
	return size;
}
function changeSize(text){
	let size = setFontSize(valueSizeFont);
	text.style.fontsize = size;
}

function update() {
	changeSize(texte);
}
update()