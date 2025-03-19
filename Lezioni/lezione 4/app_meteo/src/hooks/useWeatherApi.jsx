// src/hooks/useWeatherApi.js
import {useState, useEffect} from "react";
import axios from "axios";

const API_KEY = "5493c0ba748f6d008c7e18a7cbe02654"; // Nella pratica, usare variabili d'ambiente
const BASE_URL = "https://api.openweathermap.org/data/2.5";

function useWeatherApi(city) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Non eseguire la chiamata se non c'è una città
    if (!city) return;

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        // Chiamata per il meteo attuale
        const weatherResponse = await axios.get(`${BASE_URL}/weather`, {
          params: {
            q: city,
            units: "metric",
            appid: API_KEY,
          },
        });

        // Con le coordinate dalla prima chiamata, otteniamo la previsione a 5 giorni
        const {lon, lat} = weatherResponse.data.coord;
        const forecastResponse = await axios.get(`${BASE_URL}/forecast`, {
          params: {
            lat,
            lon,
            units: "metric",
            appid: API_KEY,
          },
        });

        // Combiniamo i dati
        setData({
          current: weatherResponse.data,
          forecast: forecastResponse.data,
        });
      } catch (err) {
        setError(
          err.response?.data?.message || "Errore nel caricamento dei dati meteo"
        );
        console.error("API Error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    // Funzione di pulizia (cleanup) per gestire componenti smontati
    return () => {
      // Se avessimo un controller abort per axios, lo useremmo qui
      console.log("Cleanup: richiesta meteo per", city);
    };
  }, [city]); // La dipendenza è la città: quando cambia, rilanciamo la chiamata

  return {data, loading, error};
}

export default useWeatherApi;
