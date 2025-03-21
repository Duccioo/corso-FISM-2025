// Scrivi un programma che stampi i numeri da 1 a 100.
// Per i multipli di 3, stampa "Fizz" invece del numero. Per i multipli di 5, stampa "Buzz".
// Per i numeri che sono sia multipli di 3 che di 5, stampa "FizzBuzz".

// Soluzione
function fizzBuzz() {
  for (let i = 1; i <= 100; i++) {
    // Verifico se è multiplo sia di 3 che di 5
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    }
    // Verifico se è multiplo di 3
    else if (i % 3 === 0) {
      console.log("Fizz");
    }
    // Verifico se è multiplo di 5
    else if (i % 5 === 0) {
      console.log("Buzz");
    }
    // Altrimenti stampo il numero
    else {
      console.log(i);
    }
  }
}

// Test
fizzBuzz();
