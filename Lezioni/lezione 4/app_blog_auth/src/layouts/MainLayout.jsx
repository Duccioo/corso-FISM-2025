import {Outlet, NavLink} from "react-router-dom";
import {useAuth} from "../context/AuthContext";
import Breadcrumbs from "../components/Breadcrumbs";

function MainLayout() {
  const {isAuthenticated, logout} = useAuth();

  return (
    <div className="main-layout">
      <header>
        <div className="container">
          <h1>Il Mio Blog</h1>
          <nav>
            <ul>
              <li>
                <NavLink
                  to="/"
                  className={({isActive}) => (isActive ? "active" : "")}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/blog"
                  className={({isActive}) => (isActive ? "active" : "")}
                >
                  Blog
                </NavLink>
              </li>
              {isAuthenticated ? (
                <>
                  <li>
                    <NavLink
                      to="/admin"
                      className={({isActive}) => (isActive ? "active" : "")}
                    >
                      Admin
                    </NavLink>
                  </li>
                  <li>
                    <button onClick={logout}>Logout</button>
                  </li>
                </>
              ) : (
                <li>
                  <NavLink
                    to="/login"
                    className={({isActive}) => (isActive ? "active" : "")}
                  >
                    Login
                  </NavLink>
                </li>
              )}
            </ul>
          </nav>
          <Breadcrumbs />
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        <p>&copy; 2025 Il Mio Blog</p>
      </footer>
    </div>
  );
}

export default MainLayout;
