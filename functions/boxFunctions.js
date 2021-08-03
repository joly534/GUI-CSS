let ongletBoxMargin = document.getElementById('onglet_box_margin');
let ongletBowPadding = document.getElementById('onglet_box_padding');
let ongletBoxShadow = document.getElementById('onglet_box_shadow');


ongletBoxMargin.style.display = "block";
ongletBowPadding.style.display = "none";
ongletBoxShadow.style.display = "none";

function showOngletBoxMargin(){
    ongletBoxMargin.style.display = "block";
    ongletBowPadding.style.display = "none";
    ongletBoxShadow.style.display = "none";
}
function showOngletBoxPadding(){
    ongletBoxMargin.style.display = "none";
    ongletBowPadding.style.display = "block";
    ongletBoxShadow.style.display = "none";
}
function showOngletBoxShadow(){
    ongletBoxMargin.style.display = "none";
    ongletBowPadding.style.display = "none";
    ongletBoxShadow.style.display = "block";
}