// Filtro array: Crea una funzione che filtra un array di numeri,
// restituendo solo quelli maggiori di un valore soglia fornito come parametro.

// Soluzione
function filtraArray(array, soglia) {
  // Metodo 1: usando il metodo filter
  return array.filter((numero) => numero > soglia);

  // Metodo 2: implementazione manuale (per scopi didattici)
  /*
    const risultato = [];
    
    for (let i = 0; i < array.length; i++) {
        if (array[i] > soglia) {
            risultato.push(array[i]);
        }
    }
    
    return risultato;
    */
}

// Test
console.log(filtraArray([10, 5, 23, 8, 14, 6], 10)); // Output: [23, 14]
