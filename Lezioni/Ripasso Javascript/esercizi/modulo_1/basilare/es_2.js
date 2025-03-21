// Controllo pari/dispari: Crea una funzione che accetta un numero e restituisce "pari" se il numero è pari, altrimenti "dispari".
// Soluzione
function pariODispari(numero) {
  // Un numero è pari se il resto della divisione per 2 è 0
  if (numero % 2 === 0) {
    return "pari";
  } else {
    return "dispari";
  }

  // Alternativa più concisa usando operatore ternario:
  return numero % 2 === 0 ? "pari" : "dispari";
}

// Test
console.log(pariODispari(4)); // Output: pari
console.log(pariODispari(7)); // Output: dispari
