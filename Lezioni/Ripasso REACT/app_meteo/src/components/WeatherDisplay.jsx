import {useMemo} from "react";
import WeatherCard from "./WeatherCard";

function WeatherDisplay({weatherData}) {
  const {current, forecast} = weatherData;

  // useMemo per calcolare i dati giornalieri dalla previsione
  // Questo è utile se la trasformazione è costosa
  const dailyForecasts = useMemo(() => {
    // In un'applicazione reale, questa operazione potrebbe essere complessa
    // groupBy, calcoli, filtraggio, ecc.

    // Esempio di raggruppamento per giorno (semplificato)
    const dailyData = {};

    forecast.list.forEach((item) => {
      // Estrai la data (solo giorno) dal timestamp
      const date = new Date(item.dt * 1000).toLocaleDateString();

      if (!dailyData[date]) {
        dailyData[date] = {
          date,
          temps: [],
          icons: [],
          descriptions: [],
        };
      }

      dailyData[date].temps.push(item.main.temp);
      dailyData[date].icons.push(item.weather[0].icon);
      dailyData[date].descriptions.push(item.weather[0].description);
    });

    // Trasforma in array e calcola valori rappresentativi per ogni giorno
    return Object.values(dailyData)
      .map((day) => {
        // Calcolo temperatura media
        const avgTemp =
          day.temps.reduce((sum, temp) => sum + temp, 0) / day.temps.length;

        // Trova l'icona più frequente
        const iconCounts = {};
        day.icons.forEach((icon) => {
          iconCounts[icon] = (iconCounts[icon] || 0) + 1;
        });
        const mostFrequentIcon = Object.entries(iconCounts).sort(
          (a, b) => b[1] - a[1]
        )[0][0];

        return {
          date: day.date,
          avgTemp: avgTemp.toFixed(1),
          icon: mostFrequentIcon,
          description:
            day.descriptions[Math.floor(day.descriptions.length / 2)],
        };
      })
      .slice(0, 5); // Limitiamo a 5 giorni
  }, [forecast.list]); // Dipendenza all'array di previsioni

  // useMemo per statistiche meteorologiche aggiuntive
  const weatherStats = useMemo(() => {
    const temps = forecast.list.map((item) => item.main.temp);

    return {
      maxTemp: Math.max(...temps).toFixed(1),
      minTemp: Math.min(...temps).toFixed(1),
      avgTemp: (
        temps.reduce((sum, temp) => sum + temp, 0) / temps.length
      ).toFixed(1),
    };
  }, [forecast.list]);

  return (
    <div className="weather-display">
      <div className="current-weather">
        <h2>
          {current.name}, {current.sys.country}
        </h2>
        <div className="main-temp">
          <img
            src={`http://openweathermap.org/img/wn/${current.weather[0].icon}@2x.png`}
            alt={current.weather[0].description}
          />
          <span className="temp">{current.main.temp.toFixed(1)}°C</span>
        </div>
        <p className="description">{current.weather[0].description}</p>
        <div className="details">
          <p>Umidità: {current.main.humidity}%</p>
          <p>Vento: {current.wind.speed} m/s</p>
        </div>
      </div>

      <div className="forecast">
        <h3>Previsioni prossimi giorni</h3>
        <div className="forecast-cards">
          {dailyForecasts.map((day) => (
            <WeatherCard key={day.date} day={day} />
          ))}
        </div>
      </div>

      <div className="stats">
        <h3>Statistiche meteo</h3>
        <p>Temperatura massima: {weatherStats.maxTemp}°C</p>
        <p>Temperatura minima: {weatherStats.minTemp}°C</p>
        <p>Temperatura media: {weatherStats.avgTemp}°C</p>
      </div>
    </div>
  );
}

export default WeatherDisplay;
