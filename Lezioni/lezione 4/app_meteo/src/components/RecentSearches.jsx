// src/components/RecentSearches.jsx
import {useCallback, useEffect} from "react";

function RecentSearches({onSelectCity, recentSearches, setRecentSearches}) {
  // Ora riceviamo recentSearches e setRecentSearches come props

  // useCallback per evitare ri-render inutili quando viene passato a componenti figli
  const handleSelectCity = useCallback(
    (city) => {
      onSelectCity(city);
    },
    [onSelectCity]
  );

  // useCallback per la funzione di aggiunta di una città alle ricerche recenti
  const addRecentCity = useCallback(
    (city) => {
      setRecentSearches((prev) => {
        // Rimuove la città se già presente
        const filtered = prev.filter((item) => item !== city);
        // Aggiunge la città all'inizio e limita a 5 elementi
        return [city, ...filtered].slice(0, 5);
      });
    },
    [setRecentSearches]
  );

  // useCallback per la funzione di pulizia delle ricerche recenti
  const clearRecentSearches = useCallback(() => {
    setRecentSearches([]);
  }, [setRecentSearches]);

  // Espone il metodo addRecentCity all'esterno usando un effetto
  // (In un'app reale potremmo usare un Context per questo)
  useEffect(() => {
    // Rendiamo disponibile la funzione addRecentCity globalmente
    window.addRecentCity = addRecentCity;

    return () => {
      // Pulizia alla disinstallazione del componente
      delete window.addRecentCity;
    };
  }, [addRecentCity]);

  // Se non ci sono ricerche recenti, non mostrare nulla
  if (recentSearches.length === 0) {
    return null;
  }

  return (
    <div className="recent-searches">
      <div className="header">
        <h3>Ricerche recenti</h3>
        <button onClick={clearRecentSearches} className="clear-button">
          Cancella
        </button>
      </div>

      <ul className="searches-list">
        {recentSearches.map((city, index) => (
          <li key={index} onClick={() => handleSelectCity(city)}>
            {city}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecentSearches;
