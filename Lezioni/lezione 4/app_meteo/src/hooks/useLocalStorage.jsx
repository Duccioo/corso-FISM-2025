import {useState, useEffect} from "react";

function useLocalStorage(key, initialValue) {
  // Stato per memorizzare il nostro valore
  // Passa la funzione di inizializzazione a useState per eseguirla solo una volta
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Ottieni dall'localStorage usando la chiave
      const item = window.localStorage.getItem(key);
      // Analizza il JSON memorizzato o restituisci initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // Se c'è un errore, restituisci il valore iniziale
      console.error(`Error reading localStorage key "${key}":`, error);
      return initialValue;
    }
  });

  // Restituisci una versione avvolta di useState che persiste nel localStorage
  const setValue = (value) => {
    try {
      // Consenti al valore di essere una funzione per avere la stessa API di useState
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      // Salva nello stato
      setStoredValue(valueToStore);
      // Salva nel localStorage
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      // Una versione più avanzata gestirebbe meglio l'errore
      console.error(`Error setting localStorage key "${key}":`, error);
    }
  };

  // Effetto per sincronizzare con altri tab/finestre
  useEffect(() => {
    function handleStorageChange(event) {
      if (event.key === key) {
        try {
          // Aggiorna lo stato se la stessa chiave cambia in un'altra finestra
          setStoredValue(
            JSON.parse(event.newValue || JSON.stringify(initialValue))
          );
        } catch (error) {
          console.error(
            `Error parsing localStorage change for key "${key}":`,
            error
          );
        }
      }
    }

    // Aggiungi event listener
    window.addEventListener("storage", handleStorageChange);

    // Rimuovi event listener alla disinstallazione
    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [key, initialValue]);

  return [storedValue, setValue];
}

export default useLocalStorage;
