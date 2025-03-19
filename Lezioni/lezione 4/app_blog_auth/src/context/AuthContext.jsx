import {createContext, useContext, useState, useEffect} from "react";

const AuthContext = createContext();

export function AuthProvider({children}) {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Controlla se l'utente è già autenticato (localStorage)
  useEffect(() => {
    const storedUser = localStorage.getItem("blogUser");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
      setIsAuthenticated(true);
    }
  }, []);

  // Funzione di login
  const login = (credentials) => {
    // In un'applicazione reale, qui faresti una chiamata API
    // Per semplicità, simuliamo un'autenticazione con credenziali hardcoded
    if (
      credentials.email === "admin@example.com" &&
      credentials.password === "password"
    ) {
      const userData = {
        id: 1,
        name: "Admin User",
        email: credentials.email,
        role: "admin",
      };

      // Salva i dati utente
      setUser(userData);
      setIsAuthenticated(true);
      localStorage.setItem("blogUser", JSON.stringify(userData));

      return {success: true, user: userData};
    }

    return {success: false, error: "Credenziali non valide"};
  };

  // Funzione di logout
  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
    localStorage.removeItem("blogUser");
    // Rimuoviamo il navigate qui, la navigazione dovrà essere gestita dal componente che chiama logout
  };

  const value = {
    user,
    isAuthenticated,
    login,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  return useContext(AuthContext);
}
