function gonight() {
    document.getElementById("bodyday").classList.toggle("bodynight");
}

function gohome() {
    document.getElementById("mainhome").style.display = "flex";
    document.getElementById("mainclothes").style.display = "none";
    document.getElementById("mainsize").style.display = "none";
    document.getElementById("maincart").style.display = "none";
}

function goclothes() {
    document.getElementById("mainhome").style.display = "none";
    document.getElementById("mainclothes").style.display = "flex";
    document.getElementById("mainsize").style.display = "none";
    document.getElementById("maincart").style.display = "none";
}

function gosize() {
    document.getElementById("mainhome").style.display = "none";
    document.getElementById("mainclothes").style.display = "none";
    document.getElementById("mainsize").style.display = "flex";
    document.getElementById("maincart").style.display = "none";
}

function gocart() {
    document.getElementById("mainhome").style.display = "none";
    document.getElementById("mainclothes").style.display = "none";
    document.getElementById("mainsize").style.display = "none";
    document.getElementById("maincart").style.display = "flex";
}