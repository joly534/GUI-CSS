let ongletText = document.getElementById('onglet_text');
let ongletBorder = document.getElementById('onglet_border');
let ongletBox = document.getElementById('onglet_box');


ongletText.style.display = "block";

function showOngletText(){  
    ongletText.style.display = "block";    
    ongletBorder.style.display = "none";
    ongletBox.style.display = "none";
}

function showOngletBorder(){
    ongletText.style.display = "none";
    ongletBorder.style.display = "block";
    ongletBox.style.display = "none";
}

function showOngletBox(){
    ongletText.style.display = "none";
    ongletBorder.style.display = "none";
    ongletBox.style.display = "block";
}