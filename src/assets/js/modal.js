var registracijaModal = document.getElementById("registracija-modal");
var prijavaModal = document.getElementById("prijava-modal");

var openRegistracija = document.getElementById("open-registracija");
var openPrijava = document.getElementById("open-prijava");

var span = document.getElementsByClassName("close")[0];

openRegistracija.onclick = function() {
    registracijaModal.style.display = "block";
}
openPrijava.onclick = function(){
    prijavaModal.style.display= "block";
}

span.onclick = function() {
    registracijaModal.style.display = "none";
    prijavaModal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == registracijaModal) {
        registracijaModal.style.display = "none";
    }
}
window.onclick = function(event) {
    if (event.target == prijavaModal) {
        prijavaModal.style.display = "none";
    }
}