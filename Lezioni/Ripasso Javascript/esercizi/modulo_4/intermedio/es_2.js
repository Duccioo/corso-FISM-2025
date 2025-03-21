// Caricamento in Parallelo con Limite: Implementa una funzione che accetta un array di URL e un numero massimo di richieste parallele,
//  quindi scarica tutti gli URL rispettando il limite di concorrenza.

// Soluzione
async function scaricaURLConLimite(urls, limiteConcorrenza = 3) {
  // Array per memorizzare i risultati
  const risultati = new Array(urls.length);
  // Array per tenere traccia delle Promise in corso
  const promesseAttive = [];
  // Indice del prossimo URL da scaricare
  let indiceCorrente = 0;

  // Funzione per scaricare un singolo URL
  async function scaricaURL(url, indice) {
    try {
      const risposta = await fetch(url);

      if (!risposta.ok) {
        throw new Error(`Errore HTTP: ${risposta.status}`);
      }

      const dati = await risposta.json();
      risultati[indice] = {url, dati, status: "success"};
    } catch (errore) {
      risultati[indice] = {url, errore: errore.message, status: "error"};
    }
  }

  // Funzione per avviare il prossimo download
  async function avviaProssimoDownload() {
    // Ottieni l'indice corrente e incrementalo
    const indice = indiceCorrente++;

    // Se abbiamo finito gli URL, esci
    if (indice >= urls.length) return;

    // Avvia il download e rimuovi la promessa dall'array quando completata
    const promessa = scaricaURL(urls[indice], indice).finally(() => {
      // Rimuovi questa promessa dall'array delle attive
      const index = promesseAttive.indexOf(promessa);
      if (index !== -1) {
        promesseAttive.splice(index, 1);
      }
      // Avvia il prossimo download
      return avviaProssimoDownload();
    });

    // Aggiungi la promessa all'array delle attive
    promesseAttive.push(promessa);
  }

  // Avvia i download iniziali (fino al limite di concorrenza)
  for (let i = 0; i < Math.min(limiteConcorrenza, urls.length); i++) {
    await avviaProssimoDownload();
  }

  // Attendi che tutte le promesse attive siano completate
  while (promesseAttive.length > 0) {
    await Promise.race(promesseAttive);
  }

  return risultati;
}

// Test
const urls = [
  "https://jsonplaceholder.typicode.com/posts/1",
  "https://jsonplaceholder.typicode.com/posts/2",
  "https://jsonplaceholder.typicode.com/posts/3",
  "https://jsonplaceholder.typicode.com/posts/4",
  "https://jsonplaceholder.typicode.com/posts/5",
  "https://jsonplaceholder.typicode.com/posts/6",
  "https://jsonplaceholder.typicode.com/posts/nonexistent", // Questo URL genererà un errore
];

async function testScaricamento() {
  console.log("Avvio scaricamento con limite di concorrenza di 2...");
  const inizio = Date.now();

  const risultati = await scaricaURLConLimite(urls, 2);

  const durata = Date.now() - inizio;
  console.log(`Scaricamento completato in ${durata}ms`);

  // Mostra quanti download sono riusciti e quanti sono falliti
  const successi = risultati.filter((r) => r.status === "success").length;
  const errori = risultati.filter((r) => r.status === "error").length;

  console.log(`Risultati: ${successi} successi, ${errori} errori`);
  console.log("Primo risultato:", risultati[0]);
}

testScaricamento();
