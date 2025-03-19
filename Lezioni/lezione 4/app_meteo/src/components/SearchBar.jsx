// src/components/SearchBar.jsx
import {useState, useRef, useEffect} from "react";

function SearchBar({onSearch}) {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef(null);

  // Focus sull'input al caricamento del componente
  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onSearch(inputValue.trim());
    }
  };

  // Implementazione di suggerimenti al digitare (simulato)
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    // Simuliamo un'API di suggerimenti (in un caso reale, useremmo un debounce)
    if (inputValue.length > 2) {
      const mockSuggestions = [
        `${inputValue} City`,
        `${inputValue}ville`,
        `${inputValue} Metropolis`,
      ];
      setSuggestions(mockSuggestions);
    } else {
      setSuggestions([]);
    }
  }, [inputValue]);

  const handleSuggestionClick = (suggestion) => {
    setInputValue(suggestion);
    setSuggestions([]);
    // Non eseguiamo subito la ricerca, lasciamo che l'utente confermi
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <input
            ref={inputRef}
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Cerca una città..."
            className="search-input"
          />
          <button type="submit" className="search-button">
            Cerca
          </button>
        </div>

        {suggestions.length > 0 && (
          <ul className="suggestions-list">
            {suggestions.map((suggestion, index) => (
              <li key={index} onClick={() => handleSuggestionClick(suggestion)}>
                {suggestion}
              </li>
            ))}
          </ul>
        )}
      </form>
    </div>
  );
}

export default SearchBar;
