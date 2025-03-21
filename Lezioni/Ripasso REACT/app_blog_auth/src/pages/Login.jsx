import {useState} from "react";
import {useNavigate, useLocation} from "react-router-dom";
import {useAuth} from "../context/AuthContext";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const {login} = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // Recupera la URL di origine, se presente
  const from = location.state?.from?.pathname || "/admin";

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    // Validazione
    if (!email || !password) {
      setError("Inserisci email e password");
      return;
    }

    // Tentativo di login
    const result = login({email, password});

    if (result.success) {
      // Redirect alla pagina originale o all'admin
      navigate(from, {replace: true});
    } else {
      setError(result.error);
    }
  };

  return (
    <div className="login-page">
      <h2>Accedi al tuo account</h2>
      <p>Usa admin@example.com / password per testare</p>

      {error && <div className="error">{error}</div>}

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit">Accedi</button>
      </form>
    </div>
  );
}

export default Login;
