// Trasformazione JSON: Scrivi una funzione che prende un oggetto JavaScript complesso
// e lo converte in JSON, ma esclude le proprietà con valori null o undefined.

// Soluzione
function jsonSenzaNull(oggetto) {
  // Funzione di sostituzione per JSON.stringify
  function replacer(chiave, valore) {
    // Se il valore è null o undefined, escludi la proprietà
    if (valore === null || valore === undefined) {
      return undefined; // Questo fa sì che la proprietà venga omessa
    }
    return valore;
  }

  return JSON.stringify(oggetto, replacer);
}

// Test
const dati = {
  nome: "Mario",
  età: 30,
  email: null,
  città: "Roma",
  telefono: undefined,
};
console.log(jsonSenzaNull(dati));
