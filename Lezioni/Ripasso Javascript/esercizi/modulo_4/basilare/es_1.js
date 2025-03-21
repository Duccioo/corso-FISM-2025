// Timer con Promises:
// Crea una funzione aspetta che accetta un numero di millisecondi e
// restituisce una Promise che si risolve dopo quel tempo.

// Soluzione
function aspetta(millisecondi) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(`Sono passati ${millisecondi} ms`);
    }, millisecondi);
  });
}

// Test
console.log("Inizio");

aspetta(2000)
  .then((messaggio) => {
    console.log(messaggio); // "Sono passati 2000 ms"
    return aspetta(1000);
  })
  .then((messaggio) => {
    console.log(messaggio); // "Sono passati 1000 ms"
    console.log("Fine");
  });
