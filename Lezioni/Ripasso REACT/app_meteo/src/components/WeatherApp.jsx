// src/components/WeatherApp.jsx
import {useState, useCallback, useEffect, useMemo} from "react";
import SearchBar from "./SearchBar";
import WeatherDisplay from "./WeatherDisplay";
import RecentSearches from "./RecentSearches";
import ErrorMessage from "./ErrorMessage";
import useWeatherApi from "../hooks/useWeatherApi";
import useLocalStorage from "../hooks/useLocalStorage";

function WeatherApp() {
  const [searchCity, setSearchCity] = useState("");
  const [weatherCache, setWeatherCache] = useLocalStorage("weatherCache", {});
  const [recentSearches, setRecentSearches] = useLocalStorage(
    "recentSearches",
    []
  );

  // Effetto per aggiornare la cache ogni 30 minuti (simulato)
  useEffect(() => {
    const CACHE_EXPIRY = 30 * 60 * 1000; // 30 minuti in millisecondi

    // Pulizia cache scaduta
    const now = new Date().getTime();
    const updatedCache = {};

    Object.entries(weatherCache).forEach(([city, cachedData]) => {
      if (now - cachedData.timestamp < CACHE_EXPIRY) {
        updatedCache[city] = cachedData;
      }
    });

    if (Object.keys(updatedCache).length !== Object.keys(weatherCache).length) {
      setWeatherCache(updatedCache);
    }
  }, []); // Eseguito solo al montaggio del componente

  // Determina se usare la cache o chiamare l'API
  const shouldUseCache = useMemo(() => {
    if (!searchCity) return false;

    const cachedData = weatherCache[searchCity];
    if (!cachedData) return false;

    const now = new Date().getTime();
    const CACHE_EXPIRY = 30 * 60 * 1000; // 30 minuti in millisecondi

    return now - cachedData.timestamp < CACHE_EXPIRY;
  }, [searchCity, weatherCache]);

  // Utilizza il hook API se non c'è cache valida
  const {
    data: apiData,
    loading: apiLoading,
    error: apiError,
  } = useWeatherApi(shouldUseCache ? null : searchCity);

  // Unifica i dati dalla cache o dall'API
  const data = shouldUseCache ? weatherCache[searchCity].data : apiData;
  const loading = shouldUseCache ? false : apiLoading;
  const error = shouldUseCache ? null : apiError;

  // Aggiorna la cache quando arrivano nuovi dati dall'API
  useEffect(() => {
    if (searchCity && apiData && !apiLoading && !apiError) {
      setWeatherCache((prev) => ({
        ...prev,
        [searchCity]: {
          data: apiData,
          timestamp: new Date().getTime(),
        },
      }));

      // Aggiorna anche le ricerche recenti
      setRecentSearches((prev) => {
        const filtered = prev.filter((city) => city !== searchCity);
        return [searchCity, ...filtered].slice(0, 5);
      });
    }
  }, [
    searchCity,
    apiData,
    apiLoading,
    apiError,
    setWeatherCache,
    setRecentSearches,
  ]);

  const handleSearch = useCallback((city) => {
    setSearchCity(city);
  }, []);

  return (
    <div className="weather-app">
      <h1>Previsioni Meteo</h1>
      <SearchBar onSearch={handleSearch} />

      {error && <ErrorMessage message={error} />}

      {loading && <div className="loading">Caricamento in corso...</div>}

      {!loading && data && <WeatherDisplay weatherData={data} />}

      <RecentSearches
        onSelectCity={handleSearch}
        recentSearches={recentSearches}
        setRecentSearches={setRecentSearches}
      />

      {/* Informazioni sulla fonte dei dati */}
      {data && searchCity && (
        <div className="data-source">
          {shouldUseCache ? (
            <p className="cached">
              Dati dalla cache (ultimo aggiornamento:{" "}
              {new Date(
                weatherCache[searchCity].timestamp
              ).toLocaleTimeString()}
              )
            </p>
          ) : (
            <p className="fresh">Dati aggiornati in tempo reale</p>
          )}
        </div>
      )}
    </div>
  );
}

export default WeatherApp;
