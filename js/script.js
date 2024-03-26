// poniamo la questione dei km
let questKm = prompt("Quanti km vuoi percorrere?");
    questKm = parseInt(questKm);
        console.log(questKm, typeof questKm);

// condizione se è diverso da un null ed è maggiore di 0 stampa i km inseriti - altrimenti errore
if (!isNaN(questKm) && questKm > 0) { 
    document.getElementById("questKm").innerHTML = `Hai inserito: <strong>${questKm} km </strong>`;
} else {
    document.getElementById("questKm").innerHTML = `per favore inserisci un numero valido. Ricarica la pagina.`;
}

// rapporto per calcolare il prezzo in base ai km dell'utente
let priceKm = questKm * 0.21
    console.log(priceKm, typeof priceKm);

// poniamo la questione dell'età
let eta = prompt("inserisci la tua età");
    eta = parseInt(eta);
        console.log(eta, typeof eta);

// condizione generale se il numero dell'età inserito dal cliente è diverso da un null ed è maggiore di 0 esegui - altrimenti errore
if (!isNaN(eta) && eta > 0) {

    // 1. condizione secondaria se minore di 18 anni stampare e cacolare uno sconto del 20% .
    // 2. condizione secondaria se maggiore di 65 anni stampare e cacolare uno sconto del 40% .
    // 3. condizione secondaria se compreso tra 18 - 65 stampare prezzo originale .
    if (eta < 18) {
        
        let discountedPriceUnder18 = priceKm * 0.80;
        document.getElementById("eta").innerHTML = `hai diritto ad uno sconto giovani del <strong> 20%. </strong>`;
        document.getElementById("totale").innerHTML = `<sub><del>${priceKm.toFixed(2)} €</del></sub> ${discountedPriceUnder18.toFixed(2)} €`;
        
    } else if (eta > 65) {
        
        let discountedPriceOver65 = priceKm * 0.60;
        document.getElementById("eta").innerHTML = `${eta} anni complimenti!!! hai diritto ad uno sconto senior del 40%.`;
        document.getElementById("totale").innerHTML = `<del>${priceKm.toFixed(2)} €</del> ${discountedPriceOver65.toFixed(2)} €`;
        
    } else {
        
        document.getElementById("eta").innerHTML = `non hai diritto ad uno sconto`;
        document.getElementById("totale").innerHTML = `${priceKm.toFixed(2)} €`;
    }
        
} else {

    document.getElementById("eta").innerHTML = `${eta} non valido, pervafore inserisci la tua reale eta.`
    
}