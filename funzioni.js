function gioca(){
    location.href = "gioca.html";
}
function impostazioni() {
    location.href = "impostazioni.html";
}
function mainmenu() {
    location.href = "index.html";
}
function info() {
    location.href = "info.html";
}
function lingua() {
    location.href = "Gioco in inglese/mainmenuing.html";
}
function sceltaGiocatore() {
    location.href = "GiocoConMappa/sceltaGiocatore.html";
}
function dueGiocatori() {
    location.href = "dueGiocatori/due-Giocatori.html";
}
function caricaVolume(){
    let volumeSalvato = sessionStorage.getItem("volume");
    let audioPlayer = document.getElementById("audio");

    if (volumeSalvato) {
        let volumeSlider = document.getElementById("regolatoreVolume");
        
        if (volumeSlider) {
            volumeSlider.value = volumeSalvato; // Solo se lo slider esiste
        }
    }
}
window.addEventListener("load", caricaVolume);
document.addEventListener("DOMContentLoaded", function() {
    let volumeSlider = document.getElementById("regolatoreVolume");
    if (volumeSlider) {
        volumeSlider.addEventListener("input", function() {
            let valoreVolume = this.value;
            if (!isNaN(valoreVolume)) {
                sessionStorage.setItem("volume", valoreVolume);
            }
        });
    }
});
