// Classe con metodi avanzati: Crea una classe Carrello che gestisce un carrello della spesa con metodi per aggiungere prodotti,
//  rimuoverli, calcolare il totale e applicare sconti.

// Soluzione
class Carrello {
  constructor() {
    this.prodotti = [];
  }

  aggiungiProdotto(nome, prezzo, quantità = 1) {
    // Verifica se il prodotto è già nel carrello
    const indice = this.prodotti.findIndex((p) => p.nome === nome);

    if (indice >= 0) {
      // Aggiorna la quantità se il prodotto esiste già
      this.prodotti[indice].quantità += quantità;
    } else {
      // Aggiungi il nuovo prodotto
      this.prodotti.push({nome, prezzo, quantità});
    }

    return this; // Per chiamate a catena
  }

  rimuoviProdotto(nome, quantità = 1) {
    const indice = this.prodotti.findIndex((p) => p.nome === nome);

    if (indice >= 0) {
      // Riduci la quantità
      this.prodotti[indice].quantità -= quantità;

      // Rimuovi il prodotto se la quantità è 0 o negativa
      if (this.prodotti[indice].quantità <= 0) {
        this.prodotti.splice(indice, 1);
      }
    }

    return this;
  }

  calcolaTotale() {
    return this.prodotti.reduce((totale, {prezzo, quantità}) => {
      return totale + prezzo * quantità;
    }, 0);
  }

  applicaSconto(percentuale) {
    const sconto = percentuale / 100;
    const totale = this.calcolaTotale();

    return totale - totale * sconto;
  }

  get numeroArticoli() {
    return this.prodotti.reduce((totale, {quantità}) => totale + quantità, 0);
  }

  svuota() {
    this.prodotti = [];
    return this;
  }
}

// Test
const carrello = new Carrello();
carrello
  .aggiungiProdotto("Laptop", 1200, 1)
  .aggiungiProdotto("Mouse", 25, 2)
  .aggiungiProdotto("Tastiera", 45);

console.log(`Articoli nel carrello: ${carrello.numeroArticoli}`); // 4
console.log(`Totale: ${carrello.calcolaTotale()}€`); // 1295€
console.log(`Totale con sconto 10%: ${carrello.applicaSconto(10)}€`); // 1165.5€

carrello.rimuoviProdotto("Mouse", 1);
console.log(`Articoli dopo rimozione: ${carrello.numeroArticoli}`); // 3
