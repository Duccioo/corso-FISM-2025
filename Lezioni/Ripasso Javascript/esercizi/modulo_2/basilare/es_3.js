// Filtra numeri pari: Crea una funzione che filtra un array, restituendo solo i numeri pari.

// Soluzione
function filtraPari(numeri) {
  // Utilizziamo il metodo filter
  return numeri.filter((numero) => numero % 2 === 0);

  // Soluzione alternativa con ciclo for
  /*
    const risultato = [];
    for (let i = 0; i < numeri.length; i++) {
        if (numeri[i] % 2 === 0) {
            risultato.push(numeri[i]);
        }
    }
    return risultato;
    */
}

// Test
console.log(filtraPari([1, 2, 3, 4, 5, 6])); // Output: [2, 4, 6]
console.log(filtraPari([7, 9, 11, 13])); // Output: []
