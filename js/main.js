'use strict';
console.log('sono collegato');

//variaboile bottone di invio dati alla console
const generateButton = document.getElementById('generatore');
//funzione del bottone generatore
generateButton.addEventListener('click', function() {
    const kmInput = document.getElementById('km-user').value;
    const ageInput = document.getElementById('eta-user');
    console.log('ho clicato il bottone genera');
    console.log({kmInput});
    //dati calcolo biglietto
    const kmPrezzo = 0.21;
    const scontoUnder = 20;
    const scontoOver = 40;
    let prezzo = kmPrezzo * Number(kmInput);
    console.log({prezzo});
    //calcolo sconto
    if(ageInput.value === 'under'){
        console.log('minorenne');
        prezzo -= (prezzo / 100 * scontoUnder);              
    } else if(ageInput.value === 'over'){
        console.log('anziano');        
        prezzo -= (prezzo / 100 * scontoOver);   
    }
    console.log(`Il prezzo finale del biglietto è ${prezzo.toFixed(2)}€`);
});
