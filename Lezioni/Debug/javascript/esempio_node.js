// app.js
function elaboraDati(dati) {
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
  let dati = [5, 15, 8, 20];
  let risultati = elaboraDati(dati);
  console.log("Risultati:", risultati);

  debugger;

  dati = [20, 10, 1, 2];
  risultati = elaboraDati(dati);
  console.log("Risultati:", risultati);

  // Questo causerà un errore
  const risultatiErrore = elaboraDati(null);
} catch (errore) {
  console.error("Si è verificato un errore:", errore.message);
}

// Esecuzione con debugging:
// node --inspect app.js
// node --inspect-brk app.js (si ferma all'inizio)
