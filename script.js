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


function update() {
}
update()