export class Libro {
  constructor(titolo, autore, anno) {
    this.titolo = titolo;
    this.autore = autore;
    this.anno = anno;
    this.prestato = false;
  }

  presta() {
    if (!this.prestato) {
      this.prestato = true;
      return true;
    }
    return false;
  }

  restituisci() {
    if (this.prestato) {
      this.prestato = false;
      return true;
    }
    return false;
  }

  get info() {
    return `${this.titolo} (${this.autore}, ${this.anno}) - ${
      this.prestato ? "Prestato" : "Disponibile"
    }`;
  }
}

export function cercaPerAutore(libri, autore) {
  return libri.filter((libro) =>
    libro.autore.toLowerCase().includes(autore.toLowerCase())
  );
}

export default Libro;
