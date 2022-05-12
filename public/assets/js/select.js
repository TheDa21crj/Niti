var selectField = document.getElementById("selectField");
var selectText = document.getElementById("selectText");
var list = document.getElementById("list");
var arrowIcon = document.getElementById("arrowIcon");
var options = document.getElementsByClassName("options");

let showSelect = false;

function toggleSelectMenu() {
    list.classList.toggle("hide");
    arrowIcon.classList.toggle("rotate");
}

function select(event) {
    selectText.innerHTML = event;
    list.classList.toggle("hide");
    arrowIcon.classList.toggle("rotate");
}