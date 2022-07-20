var show = false;

document.getElementById("hamburger").addEventListener("click", function (e) {
    if (!show) {
        show = true;
        document.getElementById("nav").style.transform = "translateX(0)";
        document.getElementById("navigationID").style.display = "none";
    } else if (show) {
        show = false;
        document.getElementById("nav").style.transform = "translateX(-100%)";
        document.getElementById("navigationID").style.display = "flex";
    }
});
