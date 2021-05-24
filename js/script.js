function revealText(id) {
    getId = String(id)
    var entryDate = document.getElementById(getId);
    if (entryDate.style.display == "block") {
        entryDate.style.display = "none";
    } else {
        entryDate.style.display = "block";
    }
}
