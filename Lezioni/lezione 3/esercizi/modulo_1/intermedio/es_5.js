// Contatore lettere: Scrivi una funzione che conta quante volte una certa lettera appare in una stringa.

// Soluzione
function contaLettera(stringa, lettera) {
  let contatore = 0;

  // Converto tutto in minuscolo per rendere il controllo case-insensitive
  const stringaMinuscola = stringa.toLowerCase();
  const letteraMinuscola = lettera.toLowerCase();

  for (let i = 0; i < stringaMinuscola.length; i++) {
    if (stringaMinuscola[i] === letteraMinuscola) {
      contatore++;
    }
  }

  return contatore;
}

// Test
console.log(contaLettera("Buongiorno a tutti", "o")); // Output: 3
console.log(contaLettera("JavaScript", "a")); // Output: 2
