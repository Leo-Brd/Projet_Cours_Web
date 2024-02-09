
function dark_mode() {
    var darkElements = document.getElementsByClassName("dark");
    document.body.style.backgroundColor = "black";
    for (var i = 0; i < darkElements.length; i++) {
        darkElements[i].style.color = "white";
    }
}
