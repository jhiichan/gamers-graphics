//this function opens one and closes the other
function showCloseLevel(idOpen, idClose) {
    //Show idOpen
    document.getElementById(idOpen).style.display = "";
    //Close idClose
    document.getElementById(idClose).style.display = "none";
}