function Slider(){
    const audio = document.getElementById("audio");
    const regolatore = document.getElementById("regolatoreVolume");
    audio.volume = regolatore.ariaValueMax;
    regolatore.addEventListener("input", function(){
        audio.volume = this.value;
    });
}

let tend = null;
function Tendina() {
    if (tend) {
        tend.remove();
        tend = null;
    } else {
        tend = document.createElement('div');
        tend.style.position = "fixed";
        tend.style.left = "50.1%";
        tend.style.top = "43.5%";
        tend.style.backgroundColor = "yellow";
        tend.style.width = "8.5vw";
        tend.style.height = "4.7vh";
        tend.style.padding = "10px";
        tend.style.boxShadow = "0px 4px 8px rgba(0, 0, 0, 0.2)";
        tend.style.transition = "opacity 0.3s ease-in-out";
        tend.style.opacity = "1";
        tend.style.zIndex = "1";
        //fullscreen
        const schermoIntero = document.createElement('button');
        schermoIntero.textContent = "Schermo intero";
        schermoIntero.style.position = "fixed";
        schermoIntero.style.left = "50.1%";
        schermoIntero.style.top = "43.6%";
        schermoIntero.style.border = "none";
        schermoIntero.style.width = "150px";
        schermoIntero.style.height = "25px";
        schermoIntero.addEventListener("click", function(){
            
            if (document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen();
            } else if (document.documentElement.mozRequestFullScreen) { 
                document.documentElement.mozRequestFullScreen();
            } else if (document.documentElement.webkitRequestFullscreen) { 
                document.documentElement.webkitRequestFullscreen();
            } else if (document.documentElement.msRequestFullscreen) { 
                document.documentElement.msRequestFullscreen();
            }
        });
        // finestra (toglie solo lo schermo intero)
        const finestra = document.createElement('button');
        finestra.textContent = "Finestra";
        finestra.style.position = "fixed";
        finestra.style.left = "50.1%";
        finestra.style.top = "47.3%";
        finestra.style.border = "none";
        finestra.style.width = "150px";
        finestra.style.height = "25px";
        finestra.addEventListener("click", function(){
            if(document.fullscreenElement){
                document.exitFullscreen();
            }
        });

        tend.appendChild(finestra);
        tend.appendChild(schermoIntero);
        document.body.appendChild(tend);
    }
}

function distanze(elemento, nuovaTop, nuovaLeft){
    if(elemento){
        elemento.style.transition = "top 0.5s ease, left 0.5s ease";
        elemento.style.top = nuovaTop;
        elemento.style.left = nuovaLeft;
        elemento.style.opacity = "1";
    }
}




document.addEventListener("DOMContentLoaded", function() {
    Slider();
});
