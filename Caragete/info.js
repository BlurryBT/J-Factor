function mainmenu() {
    location.href = "mainmenu.html";
}
function regolamento(){
    const regole=document.createElement('div');
    regole.className = "regole";
    regole.style.backgroundColor = "#DAA520";
    regole.style.position = "absolute";
    regole.style.left = "50%";
    regole.style.top = "45%";
    regole.style.transform = "translate(-50%, -50%)";
    regole.style.height="550px";
    regole.style.width="600px";
    regole.style.textAlign = "center";
    regole.style.display = "flex";
    regole.style.justifyContent = "center";
    regole.style.alignItems = "center";
    regole.style.fontFamily = "arial";
    regole.style.whiteSpace = "pre-line";
    regole.textContent=`Lo svolgimento del gioco sarà simile a quello del classico gioco dell'oca, ma con l'introduzione di diverse meccaniche:\n
        - All’inizio bisogna scegliere un personaggio, tutti rappresentativi del periodo della peste.\n
        - Bisogna lanciare il dado a 6 facce e muovere la pedina in base al numero che esce.\n
        - A partire dal sesto turno, la peste inizierà a seguirti, avanzando di due caselle alla volta, QUINDI FAI ATTENZIONE A NON FARTI BECCARE!\n
        - Se la malattia ti cattura, sarai costretto a recarti al lazzaretto, che si trova al di fuori del percorso principale.\n
        - La mappa sarà particolare, suddividendosi in diverse aree ispirate a vari stati, con ogni zona composta da 15 caselle.\n
        - Alcune caselle offriranno effetti positivi, mentre altre potrebbero metterti in difficoltà.\n
        - L’OBIETTIVO E QUELLO DI ARRIVARE ALLA FINE DEL PERCORSO E SALVARSI DALLA PESTE\n`;
document.body.appendChild(regole);
}
function creatori(){
    const creatori = document.createElement('div');
    creatori.style.position = "absolute";
    creatori.style.top = "97%"
    creatori.style.left = "50%"
    creatori.style.transform = "translate(-50%, -50%)";
    creatori.style.fontFamily = "arial";
    creatori.style.color = "white";
    creatori.textContent = "Gioco creato da: Caragete Alexadnru Ioan, Pestoni Alex, Al Sabi Omar, Bertuccio Lorenzo, Zabala Alessio";
    document.body.appendChild(creatori);
}

document.addEventListener("DOMContentLoaded", function() {
    regolamento();
    creatori();
});