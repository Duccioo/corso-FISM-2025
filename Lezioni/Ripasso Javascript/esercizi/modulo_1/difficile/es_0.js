// Palindromo: Crea una funzione che verifica se una stringa è un palindromo
//  (si legge ugualmente da sinistra a destra e viceversa), ignorando spazi e punteggiatura.

// Soluzione
function isPalindromo(stringa) {
  // Rimuovo spazi, punteggiatura e converto in minuscolo
  const stringaPulita = stringa.toLowerCase().replace(/[^a-z0-9]/g, "");

  // Metodo 1: confronto la stringa con la sua versione invertita
  const stringaInvertita = stringaPulita.split("").reverse().join("");
  return stringaPulita === stringaInvertita;

  // Metodo 2: confronto carattere per carattere da estremità opposte
  /*
    const lunghezza = stringaPulita.length;
    for (let i = 0; i < lunghezza / 2; i++) {
        if (stringaPulita[i] !== stringaPulita[lunghezza - 1 - i]) {
            return false;
        }
    }
    return true;
    */
}

// Test
console.log(isPalindromo("I topi non avevano nipoti")); // Output: true
console.log(isPalindromo("Anna")); // Output: true
console.log(isPalindromo("Hello world")); // Output: false
