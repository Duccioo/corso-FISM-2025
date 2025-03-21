// Operatori spread e rest: Scrivi una funzione che unisce due oggetti utente mantenendo tutte le proprietà,
// ma in caso di conflitto dà priorità al secondo oggetto. Poi, aggiungi una lista variabile di ruoli.

// Soluzione
function unisciUtenti(utente1, utente2, ...ruoli) {
  // Uniamo gli oggetti con spread (il secondo sovrascrive proprietà duplicate)
  const utenteUnito = {...utente1, ...utente2};

  // Aggiungiamo i ruoli solo se ce ne sono
  if (ruoli.length > 0) {
    utenteUnito.ruoli = ruoli;
  }

  return utenteUnito;
}

// Test
const utente1 = {id: 1, nome: "Mario", email: "mario@example.com"};
const utente2 = {id: 2, nome: "Luigi", telefono: "123456789"};

console.log(unisciUtenti(utente1, utente2));
// { id: 2, nome: "Luigi", email: "mario@example.com", telefono: "123456789" }

console.log(unisciUtenti(utente1, utente2, "admin", "editor"));
// { id: 2, nome: "Luigi", email: "mario@example.com", telefono: "123456789", ruoli: ["admin", "editor"] }
