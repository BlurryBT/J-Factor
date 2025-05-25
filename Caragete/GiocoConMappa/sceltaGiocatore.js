function personaggi(){
    return [
        "mappa/P-MedicoDellaPeste.png",
        "mappa/P-Plebeo.png",
        "mappa/P-Cavaliere.png",
        "mappa/P-Sacerdote.png",
        "mappa/P-Nobile.png"
    ];
}
const personaggiArray = personaggi();
function Punti(){
    return [
        {x: (20 / window.innerWidth) * 100 + "%", y: (20 / window.innerHeight) * 100 + "%"},
        {x: (24 / window.innerWidth) * 100 + "%", y: (24 / window.innerHeight) * 100 + "%"},
        {x: (28 / window.innerWidth) * 100 + "%", y: (28 / window.innerHeight) * 100 + "%"},
        {x: (32 / window.innerWidth) * 100 + "%", y: (32 / window.innerHeight) * 100 + "%"},
        {x: (36 / window.innerWidth) * 100 + "%", y: (36 / window.innerHeight) * 100 + "%"},
        {x: (40 / window.innerWidth) * 100 + "%", y: (40 / window.innerHeight) * 100 + "%"}
    ];
}
const punti = Punti();
function mazzoCarte(){
    const larghezza = (250 / window.innerWidth) * 100 + "%";
    const altezza = (270 / window.innerHeight) * 100 + "%";
    for(let i = 0; i < punti.length; i++){
        const personaggio = document.createElement('img');
        personaggio.src = "mappa/carte-retro.png";
        personaggio.style.width = larghezza;
        personaggio.style.height = altezza;
        personaggio.style.position = "fixed";
        personaggio.style.left = punti[i].x;
        personaggio.style.bottom = punti[i].y;
        document.body.appendChild(personaggio);
    }
    const puntiScelta = [
        {x: "50%", y: "30%"},
        {x: "25%", y: "30%"},
        {x: "75%", y: "30%"}
    ];
    const partenza = punti[punti.length - 1];
    for(let j = 0; j < 3; j++){
        const carteScelta = document.createElement('img');
        carteScelta.src = "mappa/carte-retro.png";
        carteScelta.id = `personaggio${j}`;
        carteScelta.style.position = "fixed";
        carteScelta.style.left = partenza.x;
        carteScelta.style.bottom = partenza.y;
        carteScelta.style.width = larghezza;
        carteScelta.style.height = altezza;
        carteScelta.style.transition = "bottom 1s ease-in-out, left 1s ease-in-out";
        setTimeout(() => {
            carteScelta.style.bottom = puntiScelta[j].y;
            carteScelta.style.left = puntiScelta[j].x;
        }, 500);
        document.body.appendChild(carteScelta);
    }
    let numeri = [];
    for(let j = 0; j < 3; j++){
        let rand;
        do{
            rand = Math.floor(Math.random()*5);
        } while(numeri.includes(rand));
        numeri.push(rand);
        const carteScelta = document.createElement('img');
        carteScelta.src = personaggiArray[rand];
        carteScelta.id = `Personaggio${j}`;
        
        carteScelta.style.position = "fixed";
        carteScelta.style.left = partenza.x;
        carteScelta.style.bottom = partenza.y;
        carteScelta.style.width = "0%";
        carteScelta.style.height = altezza;
        carteScelta.style.transition = "bottom 1s ease-in-out, left 1s ease-in-out";
        setTimeout(() => {
            carteScelta.style.bottom = puntiScelta[j].y;
            carteScelta.style.left = puntiScelta[j].x;
        }, 500);
        document.body.appendChild(carteScelta);
    }
}
function scelta(){
    const cartaPescata1 = document.getElementById("personaggio0");
    const cartaPescata2 = document.getElementById("personaggio1");
    const cartaPescata3 = document.getElementById("personaggio2");
    const Personaggio1 = document.getElementById("Personaggio0");
    const Personaggio2 = document.getElementById("Personaggio1");
    const Personaggio3 = document.getElementById("Personaggio2");
    let perc = Math.floor((250 / window.innerWidth) * 100);
    let dim = 0;

    if(cartaPescata1 && cartaPescata2 && cartaPescata3){
        cartaPescata1.addEventListener("transitionend", function(event) {
            if (event.propertyName === "bottom" || event.propertyName === "left") {
                for(let i = 0; i <= Math.min(perc, 100); i++){
                    setTimeout(() =>{
                        dim = perc - i;
                        cartaPescata1.style.width = dim + "%";
                        cartaPescata2.style.width = dim + "%";
                        cartaPescata3.style.width = dim + "%";
                    }, i * 16);
                }
                for(let i = 0; i <= 13; i++){
                    setTimeout(() =>{
                        dimPersonaggi = i;
                        Personaggio1.style.width = dimPersonaggi + "%";
                        Personaggio2.style.width = dimPersonaggi + "%";
                        Personaggio3.style.width = dimPersonaggi + "%";
                    }, i * 16);
                }
            }
        }); 
    }
    
    Personaggio1.addEventListener('click', function(){
        localStorage.setItem("immagine", Personaggio1.src)
        location.href = "GiocoSingle.html";
    });
    Personaggio2.addEventListener('click', function(){
        localStorage.setItem("immagine", Personaggio2.src)
        location.href = "GiocoSingle.html";
    });
    Personaggio3.addEventListener('click', function(){
        localStorage.setItem("immagine", Personaggio3.src)
        location.href = "GiocoSingle.html";
    });
}

function pedinaColore(){
    const pedinaG = document.createElement('img');
    pedinaG.src = "mappa/pedina-gialla.png";
    pedinaG.style.objectFit = "contain";
    pedinaG.style.position = "fixed";
    pedinaG.style.top = "5%";
    pedinaG.style.left = "10%";
    pedinaG.style.width = "25%";
    pedinaG.style.height = "25%";
    pedinaG.addEventListener('click', function(){
        localStorage.setItem("pedina", pedinaG.src)
    });

    const pedinaB = document.createElement('img');
    pedinaB.src = "mappa/pedina-blu.png";
    pedinaB.style.objectFit = "contain";
    pedinaB.style.position = "fixed";
    pedinaB.style.top = "5%";
    pedinaB.style.left = "30%";
    pedinaB.style.width = "25%";
    pedinaB.style.height = "25%";
    pedinaB.addEventListener('click', function(){
        localStorage.setItem("pedina", pedinaB.src)
    });

    const pedinaV = document.createElement('img');
    pedinaV.src = "mappa/pedina-verde.png";
    pedinaV.style.objectFit = "contain";
    pedinaV.style.position = "fixed";
    pedinaV.style.top = "5%";
    pedinaV.style.left = "50%";
    pedinaV.style.width = "25%";
    pedinaV.style.height = "25%";
    pedinaV.addEventListener('click', function(){
        localStorage.setItem("pedina", pedinaV.src)
    });

    const pedinaR = document.createElement('img');
    pedinaR.src = "mappa/pedina-rossa.png";
    pedinaR.style.objectFit = "contain";
    pedinaR.style.position = "fixed";
    pedinaR.style.top = "5%";
    pedinaR.style.left = "70%";
    pedinaR.style.width = "25%";
    pedinaR.style.height = "25%";
    pedinaR.addEventListener('click', function(){
        localStorage.setItem("pedina", pedinaR.src)
    });
    

    document.body.appendChild(pedinaG);
    document.body.appendChild(pedinaB);
    document.body.appendChild(pedinaV);
    document.body.appendChild(pedinaR);
}

document.addEventListener("DOMContentLoaded", function() {
    mazzoCarte();
    scelta();
    pedinaColore();
});