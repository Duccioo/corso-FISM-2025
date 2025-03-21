// Mappatura con destrutturazione: Scrivi una funzione che prende un array di oggetti persona e restituisce un array di stringhe nel formato "Nome: [nome], Età: [età]" usando la destrutturazione.

// Soluzione
function formattaPersone(persone) {
  return persone.map(({nome, età}) => `Nome: ${nome}, Età: ${età}`);
}

// Test
const persone = [
  {nome: "Alice", età: 25, città: "Roma"},
  {nome: "Bob", età: 30, città: "Milano"},
];
console.log(formattaPersone(persone));
// Output: ["Nome: Alice, Età: 25", "Nome: Bob, Età: 30"]
