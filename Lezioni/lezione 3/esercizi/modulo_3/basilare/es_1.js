// Template literals avanzati: Crea una funzione che
// formatta le informazioni di un prodotto (nome, prezzo, disponibilità) usando template literals e logica condizionale.

// Soluzione
function formattaProdotto(nome, prezzo, disponibile) {
  return `
        Prodotto: ${nome}
        Prezzo: ${prezzo.toFixed(2)}€
        Stato: ${disponibile ? "Disponibile" : "Non disponibile"}
        ${disponibile ? "Ordina ora!" : "Attualmente esaurito"}
    `;
}

// Test
console.log(formattaProdotto("Smartphone XYZ", 299.99, true));
console.log(formattaProdotto("Cuffie Wireless", 49.95, false));