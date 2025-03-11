export class Utente {
  constructor(id, nome, email) {
    this.id = id;
    this.nome = nome;
    this.email = email;
  }

  static creaUtente({id = Date.now(), nome, email} = {}) {
    if (!nome || !email) {
      throw new Error("Nome ed email sono obbligatori");
    }
    return new Utente(id, nome, email);
  }
}
