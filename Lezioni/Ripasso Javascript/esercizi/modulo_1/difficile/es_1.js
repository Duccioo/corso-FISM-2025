// Conversione numeri romani: Scrivi una funzione che converte un numero (da 1 a 100) in numeri romani.

// Soluzione
function convertiInRomano(numero) {
  // Controllo che il numero sia nel range valido
  if (numero < 1 || numero > 100) {
    return "Numero fuori range (1-100)";
  }

  // Definiamo le corrispondenze tra numeri arabi e romani
  const valori = [
    {arabo: 100, romano: "C"},
    {arabo: 90, romano: "XC"},
    {arabo: 50, romano: "L"},
    {arabo: 40, romano: "XL"},
    {arabo: 10, romano: "X"},
    {arabo: 9, romano: "IX"},
    {arabo: 5, romano: "V"},
    {arabo: 4, romano: "IV"},
    {arabo: 1, romano: "I"},
  ];

  let risultato = "";
  let num = numero;

  // Scorriamo la tabella di corrispondenze
  for (let i = 0; i < valori.length; i++) {
    // Finché il numero è maggiore o uguale al valore corrente
    while (num >= valori[i].arabo) {
      // Aggiungiamo il simbolo romano corrispondente
      risultato += valori[i].romano;
      // Sottraiamo il valore dal numero
      num -= valori[i].arabo;
    }
  }

  return risultato;
}

// Test
console.log(convertiInRomano(9)); // Output: IX
console.log(convertiInRomano(42)); // Output: XLII
console.log(convertiInRomano(99)); // Output: XCIX
