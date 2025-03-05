// app.js
function elaboraDati(dati) {
  debugger; // Il debugger si fermerà qui quando attivato

  if (!dati || !dati.length) {
    throw new Error("Dati non validi");
  }

  const risultati = dati.map((item, index) => {
    return {
      id: index,
      valore: item * 2,
      categoria: item > 10 ? "alto" : "basso",
    };
  });

  return risultati;
}

// Test
try {
  const dati = [5, 15, 8, 20];
  const risultati = elaboraDati(dati);
  console.log("Risultati:", risultati);

  // Questo causerà un errore
  const risultatiErrore = elaboraDati(null);
} catch (errore) {
  console.error("Si è verificato un errore:", errore.message);
}

// Esecuzione con debugging:
// node --inspect app.js
// node --inspect-brk app.js (si ferma all'inizio)
