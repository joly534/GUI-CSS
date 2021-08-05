

function showCss(){
    
	if (id.value != '') {
		balise = '#' + id.value;
	} else if (classe.value != '') {
		balise = '.' + classe.value;
	} else if ((id.value != '') && (classe.value != '')) {
		balise = '#' + id.value + ', .' + classe.value;
	} else {
		balise = 'span';
	}
    css.innerHTML= balise + '{<br/>' +  codeCSS.join('<br/>') + '<br/>}';
}

function copy(){
    css.select();
    document.execCommand('copy');
}