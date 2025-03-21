// Recupero dati da JSON:
//  Scrivi una funzione che analizza una stringa JSON contenente informazioni su libri e restituisce un array con i titoli.

// Soluzione
function estraiTitoli(jsonString) {
  // Convertiamo la stringa JSON in un oggetto JavaScript
  const libri = JSON.parse(jsonString);

  // Estraiamo i titoli usando map
  return libri.map((libro) => libro.titolo);
}

// Test
const libriJSON =
  '[{"titolo":"Il Signore degli Anelli","autore":"Tolkien"},{"titolo":"Harry Potter","autore":"Rowling"},{"titolo":"1984","autore":"Orwell"}]';
console.log(estraiTitoli(libriJSON)); // Output: ["Il Signore degli Anelli", "Harry Potter", "1984"]
