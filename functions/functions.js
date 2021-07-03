
    let ongletText = document.getElementById('onglet_text');
let ongletBorder = document.getElementById('onglet_border');
let ongletBox = document.getElementById('onglet_box');

function showOngletText(){
    
    ongletBorder.style.display = "none";
    ongletBox.style.display = "none";
    ongletText.style.display = "block";
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