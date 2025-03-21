import {Link} from "react-router-dom";

function NotFound() {
  return (
    <div className="not-found">
      <h2>404 - Pagina non trovata</h2>
      <p>La pagina che stai cercando non esiste.</p>
      <Link to="/">Torna alla Home</Link>
    </div>
  );
}

export default NotFound;
