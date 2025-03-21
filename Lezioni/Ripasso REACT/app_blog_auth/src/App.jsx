// File: src/App.js
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import AdminLayout from "./layouts/AdminLayout";
import Home from "./pages/Home";
import BlogList from "./pages/BlogList";
import BlogPost from "./pages/BlogPost";
import Login from "./pages/Login";
import Dashboard from "./pages/admin/Dashboard";
import ManagePosts from "./pages/admin/ManagePosts";
import EditPost from "./pages/admin/EditPost";
import NotFound from "./pages/NotFound";
import {AuthProvider, useAuth} from "./context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        {/* Importiamo gli stili CSS */}
        <link rel="stylesheet" href="/src/index.css" />
        <link rel="stylesheet" href="/src/components/layouts.css" />
        <link rel="stylesheet" href="/src/components/pages.css" />

        <Routes>
          {/* Percorsi pubblici con MainLayout */}
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="blog" element={<BlogList />} />
            <Route path="blog/:postId" element={<BlogPost />} />
            <Route path="login" element={<Login />} />
          </Route>

          {/* Percorsi protetti con AdminLayout */}
          <Route
            path="/admin"
            element={
              <RequireAuth>
                <AdminLayout />
              </RequireAuth>
            }
          >
            <Route index element={<Dashboard />} />
            <Route path="posts" element={<ManagePosts />} />
            <Route path="posts/:postId/edit" element={<EditPost />} />
          </Route>

          {/* Gestione 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

// Componente per proteggere le route admin
function RequireAuth({children}) {
  const {isAuthenticated} = useAuth();
  const location = useLocation();

  if (!isAuthenticated) {
    // Redirect all'autenticazione, salvando la posizione corrente
    return <Navigate to="/login" state={{from: location}} replace />;
  }

  return children;
}

export default App;
