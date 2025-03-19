import {Outlet, NavLink} from "react-router-dom";
import {useAuth} from "../context/AuthContext";
import Breadcrumbs from "../components/Breadcrumbs";

function AdminLayout() {
  const {user, logout} = useAuth();

  return (
    <div className="admin-layout">
      <header>
        <h1>Pannello Admin</h1>
        <p>Benvenuto, {user?.name}</p>
        <nav>
          <ul>
            <li>
              <NavLink to="/admin">Dashboard</NavLink>
            </li>
            <li>
              <NavLink to="/admin/posts">Gestisci Post</NavLink>
            </li>
            <li>
              <NavLink to="/">Torna al Blog</NavLink>
            </li>
            <li>
              <button onClick={logout}>Logout</button>
            </li>
          </ul>
        </nav>
        <Breadcrumbs />
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default AdminLayout;
