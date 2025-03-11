// Conversione da callback a Promise:
// Prendi una funzione che utilizza callback e convertila in una funzione che restituisce una Promise.\

// Funzione originale con callback
function leggiFile(nome, callback) {
  setTimeout(() => {
    if (nome === "inesistente.txt") {
      callback(new Error("File non trovato"), null);
    } else {
      callback(null, `Contenuto del file ${nome}`);
    }
  }, 1000);
}

// Soluzione: conversione in Promise
function leggiFilePromise(nome) {
  return new Promise((resolve, reject) => {
    leggiFile(nome, (errore, contenuto) => {
      if (errore) {
        reject(errore);
      } else {
        resolve(contenuto);
      }
    });
  });
}

// Test
leggiFilePromise("documento.txt")
  .then((contenuto) => {
    console.log("Successo:", contenuto);
    return leggiFilePromise("inesistente.txt");
  })
  .catch((errore) => {
    console.error("Errore:", errore.message); // "File non trovato"
  });
