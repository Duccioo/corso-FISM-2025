// src/components/ErrorMessage.jsx
import React from "react";

function ErrorMessage({message}) {
  return (
    <div className="error-message">
      <p>
        <strong>Errore:</strong> {message}
      </p>
      <p className="error-help">
        Prova a verificare il nome della città o la tua connessione internet.
      </p>
    </div>
  );
}

export default ErrorMessage;
