import {Link} from "react-router-dom";

function Home() {
  return (
    <div className="home-page">
      <h2>Benvenuto nel nostro Blog</h2>
      <p>Questo è un esempio di blog con routing e autenticazione in React.</p>

      <div className="cta-buttons">
        <Link to="/blog" className="cta-button">
          Leggi gli articoli
        </Link>
      </div>
    </div>
  );
}

export default Home;
