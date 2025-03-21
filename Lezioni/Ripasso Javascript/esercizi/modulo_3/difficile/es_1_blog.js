import {Utente} from "./es_1_utente.js";
import {Post} from "./es_1_post.js";

export class Blog {
  constructor(nome) {
    this.nome = nome;
    this.utenti = [];
    this.posts = [];
  }

  registraUtente(nome, email) {
    try {
      const nuovoUtente = Utente.creaUtente({nome, email});
      this.utenti.push(nuovoUtente);
      return nuovoUtente;
    } catch (errore) {
      console.error(`Errore durante la registrazione: ${errore.message}`);
      return null;
    }
  }

  pubblicaPost(autoreId, {titolo, contenuto, tags = []} = {}) {
    const autore = this.trovaUtente(autoreId);
    if (!autore) {
      throw new Error("Autore non trovato");
    }

    if (!titolo || !contenuto) {
      throw new Error("Titolo e contenuto sono obbligatori");
    }

    const post = new Post(Date.now(), titolo, contenuto, autore);

    if (tags.length > 0) {
      post.aggiungiTag(...tags);
    }

    this.posts.push(post);
    return post;
  }

  aggiungiCommento(utenteId, postId, testo) {
    const utente = this.trovaUtente(utenteId);
    const post = this.trovaPost(postId);

    if (!utente || !post) {
      return null;
    }

    return post.aggiungiCommento(utente, testo);
  }

  trovaUtente(id) {
    return this.utenti.find((utente) => utente.id === id);
  }

  trovaPost(id) {
    return this.posts.find((post) => post.id === id);
  }

  cercaPostPerTag(tag) {
    return this.posts.filter((post) => post.tags.includes(tag));
  }

  filtraPost({autoreId, tag, ordinaPer = "data"} = {}) {
    let risultati = [...this.posts];

    if (autoreId) {
      risultati = risultati.filter((post) => post.autore.id === autoreId);
    }

    if (tag) {
      risultati = risultati.filter((post) => post.tags.includes(tag));
    }

    // Ordinamento
    if (ordinaPer === "data") {
      risultati.sort((a, b) => b.dataCreazione - a.dataCreazione);
    } else if (ordinaPer === "commenti") {
      risultati.sort((a, b) => b.commenti.length - a.commenti.length);
    }

    return risultati;
  }

  get statistiche() {
    return {
      utenti: this.utenti.length,
      posts: this.posts.length,
      commenti: this.posts.reduce(
        (totale, post) => totale + post.commenti.length,
        0
      ),
      tags: [...new Set(this.posts.flatMap((post) => post.tags))],
    };
  }
}

// Utilizzo
const blog = new Blog("Il mio blog tech");

// Registrazione utenti
const mario = blog.registraUtente("Mario Rossi", "mario@example.com");
const lucia = blog.registraUtente("Lucia Bianchi", "lucia@example.com");

// Pubblicazione post
const postJavascript = blog.pubblicaPost(mario.id, {
  titolo: "JavaScript moderno",
  contenuto: "ES6 ha introdotto molte funzionalità importanti...",
  tags: ["javascript", "es6", "programmazione"],
});

const postReact = blog.pubblicaPost(lucia.id, {
  titolo: "Introduzione a React",
  contenuto:
    "React è una libreria JavaScript per costruire interfacce utente...",
  tags: ["javascript", "react", "frontend"],
});

// Commenti
blog.aggiungiCommento(lucia.id, postJavascript.id, "Ottimo articolo!");
blog.aggiungiCommento(mario.id, postReact.id, "Molto utile, grazie!");

// Ricerca e filtraggio
console.log(blog.filtraPost({tag: "javascript"}));
console.log(blog.statistiche);
