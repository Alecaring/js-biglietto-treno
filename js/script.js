// poniamo la questione dei km
let questKm = prompt("Quanti km vuoi percorrere?");
    questKm = parseInt(questKm);
        console.log(questKm, typeof questKm);

// condizione se è diverso da un numero ed è maggiore di 0 stampa i km inseriti - altrimenti errore
if (!isNaN(questKm) && questKm > 0) { 
    document.getElementById("questKm").innerHTML = `Hai inserito: <strong>${questKm} km </strong>`;
} else {
    document.getElementById("questKm").innerHTML = `per favore inserisci un numero valido. Ricarica la pagina.`;
}