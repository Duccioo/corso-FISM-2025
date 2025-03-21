import Libro, {cercaPerAutore} from "./es_2_libro.js";

class Biblioteca {
  constructor(nome) {
    this.nome = nome;
    this.libri = [];
  }

  aggiungiLibro(titolo, autore, anno) {
    const nuovoLibro = new Libro(titolo, autore, anno);
    this.libri.push(nuovoLibro);
    return nuovoLibro;
  }

  prestaLibro(titolo) {
    const libro = this.trovaLibro(titolo);
    if (libro) {
      return libro.presta();
    }
    return false;
  }

  restituisciLibro(titolo) {
    const libro = this.trovaLibro(titolo);
    if (libro) {
      return libro.restituisci();
    }
    return false;
  }

  trovaLibro(titolo) {
    return this.libri.find((libro) =>
      libro.titolo.toLowerCase().includes(titolo.toLowerCase())
    );
  }

  cercaAutore(autore) {
    return cercaPerAutore(this.libri, autore);
  }

  get numeroDiLibri() {
    return this.libri.length;
  }

  get libriDisponibili() {
    return this.libri.filter((libro) => !libro.prestato);
  }
}

const biblioteca = new Biblioteca("Biblioteca Comunale");

biblioteca.aggiungiLibro("Il Signore degli Anelli", "J.R.R. Tolkien", 1954);
biblioteca.aggiungiLibro("Harry Potter", "J.K. Rowling", 1997);
biblioteca.aggiungiLibro("1984", "George Orwell", 1949);

console.log(`Numero di libri: ${biblioteca.numeroDiLibri}`); // 3

biblioteca.prestaLibro("Harry Potter");
console.log(`Libri disponibili: ${biblioteca.libriDisponibili.length}`); // 2

const libriTolkien = biblioteca.cercaAutore("Tolkien");
console.log(libriTolkien[0].info); // "Il Signore degli Anelli (J.R.R. Tolkien, 1954) - Disponibile"
