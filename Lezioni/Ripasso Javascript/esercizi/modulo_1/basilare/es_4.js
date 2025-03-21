// Contatore while: Utilizza un ciclo while per contare da 10 a 1 (conto alla rovescia).

// Soluzione
function contoAllaRovescia() {
  let numero = 10;

  while (numero >= 1) {
    console.log(numero);
    numero--;
  }

  console.log("Via!");
}

// Test
contoAllaRovescia();
