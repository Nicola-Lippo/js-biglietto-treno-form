'use strict';
console.log('sono collegato');

//variaboile bottone di invio dati alla console
const generateButton = document.getElementById('generatore');
//funzione del bottone generatore
generateButton.addEventListener('click', function() {

    //IMPUT
    const nameInput = document.getElementById('name-user');
    const kmInput = document.getElementById('km-user').value;
    const ageInput = document.getElementById('eta-user');
    console.log('ho clicato il bottone genera');
    console.log({kmInput});

    //OUTPUT
    
    const userOutput = document.getElementById('user-output');
    const offertaOutput = document.getElementById('offerta-output');
    const carrozzaOutput = document.getElementById('carrozza-output');
    const codiceOutput = document.getElementById('codice-output');
    const costoOutput = document.getElementById('costo-output');

    console.dir(nameInput)
    console.dir(userOutput)
    console.dir(offertaOutput)
    console.dir(carrozzaOutput)
    console.dir(codiceOutput)
    console.dir(costoOutput)    

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

    //documenti html
    const bigliettoElement = document.getElementById('biglietto')
    //mostra anteprima biglietto
    bigliettoElement.classList.remove('nascosta')

    //OUTPUT -BIGLIETTO GENERATO

    userOutput.innerText = nameInput.value;
    offertaOutput.innerText = ageInput.value;
    
    codiceOutput
    costoOutput.innerText = prezzo.toFixed(2);

});

//variaboile bottone di reset 
const resetButton = document.getElementById('reset');
//funzione del bottone reset
resetButton.addEventListener('click', function() {
    //documenti html
    const bigliettoElement = document.getElementById('biglietto');
    //nascondi anteprima biglietto
    bigliettoElement.classList.add('nascosta');
    //svuotare i campi
    const nameInput = document.getElementById('name-user');
    const kmInput = document.getElementById('km-user');
    const ageInput = document.getElementById('eta-user');
    nameInput.value ='';
    kmInput.value ='';
    ageInput.value ='under';

})
