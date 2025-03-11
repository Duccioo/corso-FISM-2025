// Media voti: Scrivi una funzione che accetta un array di oggetti studente (con nome e voto) e calcola la media dei voti.

// Soluzione
function calcolaMedia(studenti) {
  // Verifichiamo se l'array è vuoto
  if (studenti.length === 0) {
    return 0;
  }

  // Sommiamo tutti i voti
  const sommaVoti = studenti.reduce((acc, studente) => acc + studente.voto, 0);

  // Calcoliamo la media
  return sommaVoti / studenti.length;
}

// Test
const studenti = [
  {nome: "Alice", voto: 85},
  {nome: "Bob", voto: 92},
  {nome: "Carlo", voto: 78},
];
console.log(calcolaMedia(studenti)); // Output: 85 (media di 85, 92, 78)
