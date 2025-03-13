// Conversione di tipi: Scrivi un programma che prende una stringa contenente un numero (es. "42") e la converta in un numero, poi aggiungi 10 e mostra il risultato.

// Soluzione
function convertiESomma(stringaNumero) {
  // Converti la stringa in numero usando parseInt o Number
  let numero = Number(stringaNumero);
  // Aggiungi 10
  let risultato = numero + 10;
  // Mostra il risultato
  console.log(`${stringaNumero} + 10 = ${risultato}`);
  return risultato;
}

// Test
convertiESomma("42"); // Output: 42 + 10 = 52
