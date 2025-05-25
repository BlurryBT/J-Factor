function caselle(){
    return [
        {x: 150, y: 100}, // 1
        {x: 150, y: 151}, // 2
        {x: 150, y: 202}, // 3
        {x: 150, y: 253}, // 4
        {x: 150, y: 304}, // 5
        {x: 150, y: 355}, // 6
        {x: 150, y: 406}, // 7
        {x: 150, y: 457}, // 8
        {x: 150, y: 508}, // 9
        {x: 150, y: 559}, // 10
        {x: 201, y: 559}, // 11
        {x: 252, y: 559}, // 12
        {x: 252, y: 508}, // 13
        {x: 252, y: 457}, // 14
        {x: 252, y: 406}, // 15
        {x: 252, y: 355}, // 16
        {x: 252, y: 304}, // 17
        {x: 252, y: 253}, // 18
        {x: 303, y: 253}, // 19
        {x: 354, y: 253}, // 20
        {x: 405, y: 253}, // 21
        {x: 457, y: 253}, // 22
        {x: 508, y: 253}, // 23
        {x: 508, y: 304}, // 24
        {x: 508, y: 355}, // 25
        {x: 457, y: 355}, // 26
        {x: 405, y: 355}, // 27
        {x: 354, y: 355}, // 28
        {x: 354, y: 406}, // 29
        {x: 354, y: 457}, // 30
        {x: 354, y: 508}, // 31
        {x: 354, y: 559}, // 32
        {x: 405, y: 559}, // 33
        {x: 457, y: 559}, // 34
        {x: 508, y: 559}, // 35
        {x: 559, y: 559}, // 36
        {x: 610, y: 559}, // 37
        {x: 610, y: 508}, // 38
        {x: 610, y: 457}, // 39
        {x: 610, y: 406}, // 40
        {x: 610, y: 355}, // 41
        {x: 610, y: 304}, // 42
        {x: 610, y: 253}, // 43
        {x: 610, y: 202}, // 44
        {x: 610, y: 151}, // 45
        {x: 661, y: 151}, // 46
        {x: 712, y: 151}, // 47
        {x: 763, y: 151}, // 48
        {x: 814, y: 151}, // 49
        {x: 865, y: 151}, // 50
        {x: 916, y: 151}, // 51
        {x: 967, y: 151}, // 52
        {x: 968, y: 202}, // 53
        {x: 968, y: 253}, // 54
        {x: 916, y: 253}, // 55
        {x: 865, y: 253}, // 56
        {x: 814, y: 253}, // 57
        {x: 763, y: 253}, // 58
        {x: 712, y: 253}, // 59
        {x: 712, y: 304}, // 60
        {x: 712, y: 355}, // 61
        {x: 712, y: 406}, // 62
        {x: 712, y: 457}, // 63
        {x: 712, y: 508}, // 64
        {x: 763, y: 508}, // 65
        {x: 814, y: 508}, // 66
        {x: 814, y: 457}, // 67
        {x: 814, y: 406}, // 68
        {x: 814, y: 355}, // 69
        {x: 865, y: 355}, // 70
        {x: 916, y: 355}, // 71
        {x: 916, y: 406}, // 72
        {x: 916, y: 457}, // 73
        {x: 916, y: 508}, // 74
        {x: 967, y: 508}, // 75
        {x: 1018, y: 508}, // 76
        {x: 1069, y: 508}, // 77
        {x: 1069, y: 457}, // 78
        {x: 1069, y: 406}, // 79
        {x: 1069, y: 355}, // 80
        {x: 1069, y: 304}, // 81
        {x: 1069, y: 253}, // 82
        {x: 1069, y: 202}, // 83
        {x: 1069, y: 151}, // 84
        {x: 1069, y: 100}, // 85
        {x: 1069, y: 49},  // 86
        {x: 1120, y: 49},  // 87
        {x: 1171, y: 49},  // 88
        {x: 1171, y: 100}, // 89
        {x: 1171, y: 151}, // 90
        {x: 1171, y: 202}, // 91
        {x: 1171, y: 253}, // 92
        {x: 1171, y: 304}, // 93
        {x: 1171, y: 355}, // 94
        {x: 1171, y: 406}, // 95
        {x: 1171, y: 457}, // 96
        {x: 1171, y: 508}, // 97
        {x: 1171, y: 559}, // 98
        {x: 1222, y: 559}, // 99
        {x: 1273, y: 559},  // 100
        {x: 1324, y: 559} // fine
    ];
}
const punti = caselle();
function Tabellone(){
    const angoli = [10, 12, 18, 23, 25, 28, 32, 37, 45, 52, 54, 59, 64, 66, 69, 71, 74, 77, 86, 88, 98];
    const caselleOrizzontali = [11, 19, 20, 21, 22, 26, 27, 33, 34, 35, 36, 46, 47, 48, 49, 50, 51, 55, 56, 57, 58, 65, 70, 75, 76, 87, 99, 100];
    punti.forEach((punto, i) => {
        const caselle = document.createElement('div');
        caselle.style.position = "absolute";
        caselle.style.left = punti[i].x + "px";
        caselle.style.top = punti[i].y + "px";
        caselle.textContent = i + 1;
        if(angoli.includes(i + 1)){
            caselle.className = `Cel${i + 1}`;
        } else if(caselleOrizzontali.includes(i + 1)){
            caselle.className = "orizzontale";
        } else{
            caselle.className = "caselle";
        }
        document.body.appendChild(caselle);
    });
}
function Start(){
    const start = document.createElement('div');
    start.style.position = "absolute";
    start.style.left = "125px";
    start.style.top = "49px";
    start.textContent = "Start";
    start.style.width = "100px";
    start.style.height = "50px";
    start.style.textAlign = "center";
    start.style.alignContent = "center";
    start.style.backgroundColor = "green";
    document.body.appendChild(start);
}
function Fine(){
    const fine = document.createElement('div');
    fine.id = "fine";
    fine.style.position = "absolute";
    fine.style.left = "1324px";
    fine.style.top = "559px";
    fine.textContent = "Fine";
    fine.style.width = "100px";
    fine.style.height = "50px";
    fine.style.textAlign = "center";
    fine.style.alignContent = "center";
    fine.style.backgroundColor = "red";
    document.body.appendChild(fine);
}
function dado(){
    const dado = Math.floor(Math.random() * 6) + 1;
    document.getElementById("numero").innerHTML = dado;
    return dado;
}
let f = 0;
let r = 0;
let conta1 = 0;
let conta2 = 0;
let turno = 0;
function spostamento(){
    
    const movimento = document.getElementById("spostamento");
    const pedina1 = document.getElementById("pedina1");
    const pedina2 = document.getElementById("pedina2");
    movimento.addEventListener("click", function(){
        let numDado = dado();
        console.log(`valore di dado: ${numDado}`);
        
        console.log(`valore di r: ${r}`)
        if(turno % 2 === 0){
            turno++;
            r += numDado;
            console.log(`il turno: ${turno}`);
            for(let i = 0; i < numDado; i++){
                setTimeout(() => {
                    let numDado1 = numDado;
                    let muovi = punti[r - numDado1 + i];
                    console.log(`Spostando pedina a X=${muovi.x}, Y=${muovi.y}`);
                    pedina1.style.top = muovi.y + "px";
                    pedina1.style.left = muovi.x + "px";
                    pedina1.style.transition = "top 1s ease-in-out, left 1s ease-in-out";
                    movimento.disabled = true;
                    conta1++;
                    console.log(`valore di conta1 ${conta1}`);
                    if (i === numDado1 - 1){
                        setTimeout(() => {
                            movimento.disabled = false;
                        }, 1000);
                    }
                    if(r >= punti.length && conta1 >= punti.length){
                        let fine = document.getElementById("fine");
                        if (fine){
                            pedina1.style.top = fine.style.top;
                            pedina1.style.left = fine.style.left;
                        }
                        setTimeout(() => {
                            const vittoria = document.createElement('div');
                            vittoria.style.width = "1000px";
                            vittoria.style.height = "500px";
                            vittoria.style.backgroundColor = "yellow";
                            vittoria.style.zIndex = "5";
                            vittoria.style.position = "fixed";
                            vittoria.style.left = "50%";
                            vittoria.style.top = "50%";
                            vittoria.style.transform = "translate(-50%, -50%)";
                            vittoria.textContent = "Complimenti hai finito il Gioco della peste"
                            vittoria.style.textAlign = "center";
                            vittoria.style.alignContent = "center";
                            vittoria.style.fontSize = "40px";
                            // bottone chiusura menu
                            const chiudi = document.createElement('button');
                            chiudi.style.width = "20px";
                            chiudi.style.height = "20px";
                            chiudi.style.zIndex = "6";
                            chiudi.style.position = "fixed";
                            chiudi.style.left = "98%";
                            chiudi.style.top = "0%";
                            chiudi.style.borderRadius = "100%";
                            chiudi.style.border = "none";
                            chiudi.style.background = "url(mappa/X.png)";
                            chiudi.style.backgroundRepeat = "no-repeat";
                            chiudi.style.backgroundSize = "cover";

                            chiudi.addEventListener("click", function(){
                                vittoria.remove();
                            });

                            vittoria.appendChild(chiudi);
                            document.body.appendChild(vittoria);
                        }, 1000);
                    }
                }, i * 1000);
            }
        }else{
            turno++;
            f += numDado;
            for(let c = 0; c < numDado; c++){
                setTimeout(() => {
                    let numDado2 = numDado;
                    let muovi = punti[f - numDado2 + c];
                    console.log(`Spostando pedina a X=${muovi.x}, Y=${muovi.y}`);
                    pedina2.style.top = muovi.y + "px";
                    pedina2.style.left = muovi.x + "px";
                    pedina2.style.transition = "top 1s ease-in-out, left 1s ease-in-out";
                    movimento.disabled = true;
                    conta2++;
                    console.log(`valore di conta2 ${conta2}`);
                    if (c === numDado2 - 1){
                        setTimeout(() => {
                            movimento.disabled = false;
                        }, 1000);
                    }
                    if(f >= punti.length && conta2 >= punti.length){
                        let fine = document.getElementById("fine");
                        if (fine){
                            pedina2.style.top = fine.style.top;
                            pedina2.style.left = fine.style.left;
                        }
                        setTimeout(() => {
                            const vittoria = document.createElement('div');
                            vittoria.style.width = "1000px";
                            vittoria.style.height = "500px";
                            vittoria.style.backgroundColor = "yellow";
                            vittoria.style.zIndex = "5";
                            vittoria.style.position = "fixed";
                            vittoria.style.left = "50%";
                            vittoria.style.top = "50%";
                            vittoria.style.transform = "translate(-50%, -50%)";
                            vittoria.textContent = "Complimenti hai finito il Gioco della peste"
                            vittoria.style.textAlign = "center";
                            vittoria.style.alignContent = "center";
                            vittoria.style.fontSize = "40px";
                            // bottone chiusura menu
                            const chiudi = document.createElement('button');
                            chiudi.style.width = "20px";
                            chiudi.style.height = "20px";
                            chiudi.style.zIndex = "6";
                            chiudi.style.position = "fixed";
                            chiudi.style.left = "98%";
                            chiudi.style.top = "0%";
                            chiudi.style.borderRadius = "100%";
                            chiudi.style.border = "none";
                            chiudi.style.background = "url(mappa/X.png)";
                            chiudi.style.backgroundRepeat = "no-repeat";
                            chiudi.style.backgroundSize = "cover";

                            chiudi.addEventListener("click", function(){
                                vittoria.remove();
                            });

                            vittoria.appendChild(chiudi);
                            document.body.appendChild(vittoria);
                        }, 1000);
                    }
                }, c * 1000);
            }
        }
        
        
    });
}
function peste() {
    const movimento = document.getElementById("spostamento");
    const peste = document.createElement('div');
    peste.style.width = "50px";
    peste.style.height = "50px";
    peste.style.backgroundColor = "black";
    peste.style.position = "absolute";
    peste.style.zIndex = "4";
    peste.style.display = "none";
    document.body.appendChild(peste);
    
    let posizionePeste = 0;
    let pesteAttiva = false;

    setInterval(() => {
        if ((conta1 >= 10 || conta2 >= 10) && !pesteAttiva) {
            // Attivazione della peste
            peste.style.display = "block";
            pesteAttiva = true;
            peste.style.top = punti[posizionePeste].y + "px";
            peste.style.left = punti[posizionePeste].x + "px";
        }
    }, 100);
    
    movimento.addEventListener("click", function () {
        if (pesteAttiva) {
            setTimeout(() => {
                posizionePeste += 3;
                if (posizionePeste < punti.length) {
                    peste.style.top = punti[posizionePeste].y + "px";
                    peste.style.left = punti[posizionePeste].x + "px";
                    peste.style.transition = "top 1s ease-in-out, left 1s ease-in-out";
                }
                if (posizionePeste >= r){
                    alert("La peste ti ha raggiunto! Giocatore 2 Game over!");
                    if(turno % 2 === 1){
                        turno = 0;
                    }
                }else if(posizionePeste >= f){
                    alert("La peste ti ha raggiunto! Giocatore 1 Game over!");
                    if(turno % 2 === 0){
                        turno = 1;
                    }
                    
                }
            }, 5);
        }
    });
}
function keys(){
    document.addEventListener("keydown", function(event){
        if(event.key === "Escape"){
            const tasto = document.getElementById("tasto");
            const dado = document.getElementById("spostamento");
            if(tasto){
                tasto.remove();
                dado.disabled = false;
            } else{
                const menu = document.createElement('div');
                menu.id = "tasto";
                menu.style.width = "1000px";
                menu.style.height = "500px";
                menu.style.backgroundImage = "url('mappa/menu.png')";
                menu.style.backgroundSize = "cover";
                menu.style.backgroundRepeat = "no-repeat";
                menu.style.zIndex = "4";
                menu.style.position = "fixed";
                menu.style.left = "50%";
                menu.style.top = "50%";
                menu.style.transform = "translate(-50%, -50%)";
                // bottone riprendi
                const bottoneRiprendi = document.createElement('button');
                bottoneRiprendi.textContent = "Riprendi";
                bottoneRiprendi.style.fontSize = "50px";
                bottoneRiprendi.style.backgroundColor = "transparent";
                bottoneRiprendi.style.border = "none";
                bottoneRiprendi.style.width = "900px";
                bottoneRiprendi.style.height = "100px";
                bottoneRiprendi.style.position = "fixed";
                bottoneRiprendi.style.left = "50%";
                bottoneRiprendi.style.top = "15%";
                bottoneRiprendi.style.transform = "translate(-50%, -30%)";
                bottoneRiprendi.addEventListener("click", function(){
                    menu.remove();
                    dado.disabled = false;
                });
                // bottone impostazioni
                const bottoneImpostazioni = document.createElement('button');
                bottoneImpostazioni.textContent = "Impostazioni";
                bottoneImpostazioni.style.fontSize = "50px";
                bottoneImpostazioni.style.backgroundColor = "transparent";
                bottoneImpostazioni.style.border = "none";
                bottoneImpostazioni.style.width = "900px";
                bottoneImpostazioni.style.height = "100px";
                bottoneImpostazioni.style.position = "fixed";
                bottoneImpostazioni.style.left = "50%";
                bottoneImpostazioni.style.top = "45%";
                bottoneImpostazioni.style.transform = "translate(-50%, -30%)";
                // bottone menu
                const bottoneMenu = document.createElement('button');
                bottoneMenu.textContent = "Vai al menu";
                bottoneMenu.style.fontSize = "50px";
                bottoneMenu.style.backgroundColor = "transparent";
                bottoneMenu.style.border = "none";
                bottoneMenu.style.width = "900px";
                bottoneMenu.style.height = "100px";
                bottoneMenu.style.position = "fixed";
                bottoneMenu.style.left = "50%";
                bottoneMenu.style.top = "75%";
                bottoneMenu.style.transform = "translate(-50%, -30%)";
                bottoneMenu.addEventListener("click", function(){
                    location.href = "../mainmenu.html";
                });
                // bottone per tornare indietro dopo il menu
                const bottoneTorna = document.createElement('button');
                bottoneTorna.textContent = "Torna indietro";
                bottoneTorna.style.fontSize = "50px";
                bottoneTorna.style.backgroundColor = "transparent";
                bottoneTorna.style.border = "none";
                bottoneTorna.style.width = "900px";
                bottoneTorna.style.height = "100px";
                bottoneTorna.style.position = "absolute";
                bottoneTorna.style.left = "50%";
                bottoneTorna.style.top = "75%";
                bottoneTorna.style.transform = "translate(-50%, -30%)";
                bottoneTorna.style.display = "none";
                // slider volume
                const Volume = localStorage.getItem('volume') || 0.5;
                const audio = document.getElementById("Audio");
                const slider = document.createElement('input');
                const vol = document.createElement('div');
                vol.textContent = "Volume:";
                vol.style.fontSize = "30px";
                vol.style.position = "absolute";
                vol.style.left = "30%";
                vol.style.top = "15%";
                vol.style.display = "none";
                vol.style.transform = "translate(-50%, -30%)";
                slider.style.position = "absolute";
                slider.style.left = "60%";
                slider.style.top = "15%";
                slider.style.transform = "translate(-50%, -30%)";
                slider.style.width = "25%";
                slider.type = "range";
                slider.max = "1";
                slider.min = "0";
                slider.step = "0.1";
                slider.value = Volume;
                slider.style.display = "none";
                slider.addEventListener('input', () => {
                    audio.volume = slider.value;
                    localStorage.setItem('volume', slider.value);
                });

                // bottone impostazioni
                bottoneImpostazioni.addEventListener("click", function(){
                    bottoneRiprendi.style.display = "none";
                    bottoneMenu.style.display = "none";
                    bottoneImpostazioni.style.display = "none";
                    bottoneTorna.style.display = "block";
                    slider.style.display = "block";
                    vol.style.display = "block";
                });
                
                // bottone torna indietro
                bottoneTorna.addEventListener("click", function(){
                    bottoneRiprendi.style.display = "block";
                    bottoneTorna.style.display = "none";
                    bottoneMenu.style.display = "block";
                    bottoneImpostazioni.style.display = "block";
                    slider.style.display = "none";
                    vol.style.display = "none";
                });
                dado.disabled = true;
                document.body.appendChild(menu);
                menu.appendChild(bottoneMenu);
                menu.appendChild(bottoneImpostazioni);
                menu.appendChild(bottoneTorna);
                menu.appendChild(bottoneRiprendi);
                menu.appendChild(slider);
                menu.appendChild(vol);

            }
            
        }
    });
}
function Giocatori(){
    document.addEventListener("keydown", function(event){
        if(event.key === "e"){
            const giocatore = document.getElementById("giocatore");
            const dado = document.getElementById("spostamento");
            if(giocatore){
                giocatore.style.transition = "top 0.5s ease-in-out";
                giocatore.style.top = "-200px";
                setTimeout(() => {
                    giocatore.remove();
                }, 500);
                dado.disabled = false;
            } else{
                const controllaGiocatore = document.createElement('div');
                controllaGiocatore.id = "giocatore";
                controllaGiocatore.style.width = "99%";
                controllaGiocatore.style.zIndex = "5";
                controllaGiocatore.style.height = "200px";
                controllaGiocatore.style.position = "absolute";
                controllaGiocatore.style.transition = "top 0.5s ease-in-out";
                controllaGiocatore.style.top = "-200px";
                controllaGiocatore.style.backgroundImage = "url('mappa/controlloGiocatori.png')";
                controllaGiocatore.style.backgroundSize = "cover";
                controllaGiocatore.style.backgroundRepeat = "no-repeat";
                
                document.body.appendChild(controllaGiocatore);
                setTimeout(() => {
                    controllaGiocatore.style.top = "0px";
                }, 50);
                dado.disabled = true;
            }
        }
    });
}

// per fare funzionare tutte le funzioni da inserire qui
document.addEventListener("DOMContentLoaded", function() {
    Tabellone();
    Start();
    Fine()
    keys();
    spostamento();
    peste();
    Giocatori();
});