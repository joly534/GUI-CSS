
let ongletText = document.getElementById('onglet_text');
let ongletBorder = document.getElementById('onglet_border');
let ongletBox = document.getElementById('onglet_box');
let titleOngletText = document.getElementById('ongletText');


ongletText.style.display = "block";

function showOngletText(){
    
    ongletBorder.style.display = "none";
    ongletBox.style.display = "none";
    ongletText.style.display = "block";
    titleOngletText.style.borderRightColor = "aqua";
    titleOngletText.style.borderTopColor = "aqua";
    titleOngletText.style.borderLeftColor = "aqua";
    titleOngletText.style.borderTopWidth = "2px";
    titleOngletText.style.borderRightWidth = "2px";
    titleOngletText.style.borderLeftWidth = "2px";
    titleOngletText.style.borderTopStyle = "outset";
    titleOngletText.style.borderRightStyle = "outset";
    titleOngletText.style.borderLeftStyle = "outset";
}
function showOngletBorder(){
    ongletText.style.display = "none";
    ongletBox.style.display = "none";
    ongletBorder.style.display = "block";
}
function showOngletBox(){
    
    ongletText.style.display = "none";
    ongletBorder.style.display = "none";
    ongletBox.style.display = "block";
}