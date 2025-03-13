// Numeri primi: Crea una funzione che determina se un numero è primo (divisibile solo per 1 e per sé stesso).

// Soluzione
function isPrimo(numero) {
  // I numeri minori o uguali a 1 non sono primi
  if (numero <= 1) {
    return false;
  }

  // 2 e 3 sono primi
  if (numero <= 3) {
    return true;
  }

  // Se è divisibile per 2 non è primo
  if (numero % 2 === 0) {
    return false;
  }

  // Controllo solo i divisori dispari fino alla radice quadrata del numero
  // Questo ottimizza l'algoritmo
  const radice = Math.sqrt(numero);
  for (let i = 3; i <= radice; i += 2) {
    if (numero % i === 0) {
      return false;
    }
  }

  return true;
}

// Test
console.log(isPrimo(7)); // Output: true
console.log(isPrimo(12)); // Output: false
console.log(isPrimo(23)); // Output: true
