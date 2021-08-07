function showCss(){
    
	if (id.value != '') {
		balise = '#' + id.value;
	} else if (classe.value != '') {
		balise = '.' + classe.value;
	} else {
		balise = 'span';
	}
	
    css.innerHTML= balise + '{<br/>' +  codeCSS.join('<br/>') + '<br/>}';
}


function addCSS(value, index){
	let position = value.indexOf('undefined');
	if (position ==  -1 ){
		codeCSS.splice(index, 1, value);
	} else {
		;
	}
}

function addCSSMultiple(value, index){
	let position = value.indexOf('undefined');
	if (position == -1){
		codeCSS.splice(index, 1, value);		
	} else {
		;
	}
}


function copy(){
    css.select();
    document.execCommand('copy');
}