import {Utente} from "./es_1_utente.js";

export class Post {
  constructor(id, titolo, contenuto, autore) {
    this.id = id;
    this.titolo = titolo;
    this.contenuto = contenuto;
    this.autore = autore;
    this.commenti = [];
    this.dataCreazione = new Date();
    this.tags = [];
  }

  aggiungiCommento(utente, testo) {
    if (!(utente instanceof Utente)) {
      throw new Error("L'utente deve essere valido");
    }

    const commento = {
      id: Date.now(),
      testo,
      autore: utente,
      data: new Date(),
    };

    this.commenti.push(commento);
    return commento;
  }

  aggiungiTag(...tags) {
    this.tags.push(...tags);
    // Rimuoviamo eventuali duplicati
    this.tags = [...new Set(this.tags)];
    return this;
  }

  get riassunto() {
    // Restituisce le prime 100 caratteri del contenuto
    return this.contenuto.length > 100
      ? `${this.contenuto.slice(0, 100)}...`
      : this.contenuto;
  }

  get infoCompleta() {
    return {
      titolo: this.titolo,
      riassunto: this.riassunto,
      autore: this.autore.nome,
      data: this.dataCreazione.toLocaleString(),
      commenti: this.commenti.length,
      tags: this.tags,
    };
  }
}
