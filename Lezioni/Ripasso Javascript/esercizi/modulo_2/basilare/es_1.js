// Modifica array: Scrivi una funzione che prende un array di numeri e restituisce un nuovo array con ogni elemento raddoppiato.

// Soluzione
function raddoppiaNumeri(numeri) {
  // Utilizziamo il metodo map per creare un nuovo array
  return numeri.map((numero) => numero * 2);

  // Soluzione alternativa con ciclo for
  /*
    const risultato = [];
    for (let i = 0; i < numeri.length; i++) {
        risultato.push(numeri[i] * 2);
    }
    return risultato;
    */
}

// Test
console.log(raddoppiaNumeri([1, 2, 3, 4])); // Output: [2, 4, 6, 8]
console.log(raddoppiaNumeri([5, 10, 15])); // Output: [10, 20, 30]
