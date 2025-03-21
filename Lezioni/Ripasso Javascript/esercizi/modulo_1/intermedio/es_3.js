// Ordinamento array: Scrivi una funzione che accetta un array di numeri e lo restituisce ordinato dal più piccolo al più grande.

// Soluzione
function ordinaArray(array) {
  // Metodo 1: usando il metodo sort integrato
  return array.sort((a, b) => a - b);
}

// Test
console.log(ordinaArray([5, 2, 9, 1, 5, 6])); // Output: [1, 2, 5, 5, 6, 9]
