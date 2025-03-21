// Fusione oggetti: Crea una funzione deepMerge che unisce due oggetti, anche con proprietà annidate.

// Soluzione
function deepMerge(obj1, obj2) {
  // Creiamo una copia di obj1 per non modificare l'originale
  const risultato = {...obj1};

  // Iteriamo su tutte le proprietà di obj2
  for (let chiave in obj2) {
    // Se entrambi gli oggetti hanno una proprietà che è un oggetto, fondiamo ricorsivamente
    if (
      typeof obj2[chiave] === "object" &&
      !Array.isArray(obj2[chiave]) &&
      typeof risultato[chiave] === "object" &&
      !Array.isArray(risultato[chiave])
    ) {
      risultato[chiave] = deepMerge(risultato[chiave], obj2[chiave]);
    } else {
      // Altrimenti, sovrascriviamo o aggiungiamo la proprietà
      risultato[chiave] = obj2[chiave];
    }
  }

  return risultato;
}

// Test
const obj1 = {
  nome: "Prodotto",
  dettagli: {
    colore: "rosso",
    dimensione: "M",
  },
};
const obj2 = {
  prezzo: 29.99,
  dettagli: {
    materiale: "cotone",
    dimensione: "L",
  },
};
console.log(deepMerge(obj1, obj2));