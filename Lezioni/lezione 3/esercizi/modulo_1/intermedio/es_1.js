// Validazione email: Scrivi una funzione che verifica se una stringa contiene il carattere "@" e almeno un punto dopo la @,
//  restituendo un booleano.

// Soluzione
function validaEmail(email) {
  // Verifico se c'è una @ nella stringa
  const posizioneChiocciola = email.indexOf("@");

  console.log("")


  // Se non c'è @ oppure è il primo o l'ultimo carattere
  if (posizioneChiocciola <= 0 || posizioneChiocciola === email.length - 1) {
    return false;
  }

  // Prendo la parte della stringa dopo la @
  const dominio = email.substring(posizioneChiocciola + 1);

  // Verifico se c'è almeno un punto nel dominio
  return dominio.indexOf(".") > 0;
}

// Test
console.log(validaEmail("mario.rossi@example.com")); // Output: true
console.log(validaEmail("mario@examplecom")); // Output: false
console.log(validaEmail("marioexample.com")); // Output: false
