// Unione di array: Crea una funzione che unisce due array in un unico array, alternando gli elementi del primo e del secondo.

// Soluzione
function unisciAlternando(array1, array2) {
  const risultato = [];
  const lunghezzaMassima = Math.max(array1.length, array2.length);

  for (let i = 0; i < lunghezzaMassima; i++) {
    // Aggiungi l'elemento del primo array se esiste
    if (i < array1.length) {
      risultato.push(array1[i]);
    }

    // Aggiungi l'elemento del secondo array se esiste
    if (i < array2.length) {
      risultato.push(array2[i]);
    }
  }

  return risultato;
}

// Test
console.log(unisciAlternando([1, 3, 5], [2, 4, 6])); // Output: [1, 2, 3, 4, 5, 6]
console.log(unisciAlternando(["a", "c"], ["b", "d", "e"])); // Output: ['a', 'b', 'c', 'd', 'e']
