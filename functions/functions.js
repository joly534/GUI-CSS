let ongletText = document.getElementById('onglet_text');
let ongletBorder = document.getElementById('onglet_border');
let ongletBox = document.getElementById('onglet_box');


ongletText.style.display = "block";

function showOngletText(){  
    console.log('ok text');  
    ongletText.style.display = "block";    
    ongletBorder.style.display = "none";
    ongletBox.style.display = "none";
}

function showOngletBorder(){
    console.log('ok');
    ongletText.style.display = "none";
    ongletBorder.style.display = "block";
    ongletBox.style.display = "none";
}

function showOngletBox(){
    console.log('ok box');    
    ongletText.style.display = "none";
    ongletBorder.style.display = "none";
    ongletBox.style.display = "block";
}