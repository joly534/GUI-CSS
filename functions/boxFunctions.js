let ongletBackgroundColor = document.getElementById('onglet_background_color');
let ongletBoxMargin = document.getElementById('onglet_box_margin');
let ongletBowPadding = document.getElementById('onglet_box_padding');
let ongletBoxShadow = document.getElementById('onglet_box_shadow');

ongletBackgroundColor.style.display = "block";
ongletBoxMargin.style.display = "none";
ongletBowPadding.style.display = "none";
ongletBoxShadow.style.display = "none";

function showOngletBoxMargin(){
    ongletBackgroundColor.style.display = "none";
    ongletBoxMargin.style.display = "block";
    ongletBowPadding.style.display = "none";
    ongletBoxShadow.style.display = "none";
}
function showOngletBoxPadding(){
    ongletBackgroundColor.style.display = "none";
    ongletBoxMargin.style.display = "none";
    ongletBowPadding.style.display = "block";
    ongletBoxShadow.style.display = "none";
}
function showOngletBoxShadow(){
    ongletBackgroundColor.style.display = "none";
    ongletBoxMargin.style.display = "none";
    ongletBowPadding.style.display = "none";
    ongletBoxShadow.style.display = "block";
}