// src/components/WeatherCard.jsx
import React from "react";

// Componente semplice ottimizzato con React.memo
const WeatherCard = React.memo(function WeatherCard({day}) {
  return (
    <div className="weather-card">
      <div className="date">{day.date}</div>
      <img
        src={`http://openweathermap.org/img/wn/${day.icon}.png`}
        alt={day.description}
      />
      <div className="temp">{day.avgTemp}°C</div>
      <div className="description">{day.description}</div>
    </div>
  );
});

export default WeatherCard;
