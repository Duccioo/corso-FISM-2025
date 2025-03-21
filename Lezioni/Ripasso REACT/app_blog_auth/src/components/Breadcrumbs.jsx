import {Link, useLocation} from "react-router-dom";

function Breadcrumbs() {
  const location = useLocation();

  // Ottiene il percorso corrente e lo divide in segmenti
  const pathSegments = location.pathname
    .split("/")
    .filter((segment) => segment);

  // Mappatura dei segmenti per nomi più user-friendly
  const pathMap = {
    blog: "Blog",
    admin: "Admin",
    posts: "Articoli",
    edit: "Modifica",
  };

  // Se siamo sulla home page, non mostrare breadcrumbs
  if (pathSegments.length === 0) {
    return null;
  }

  return (
    <div className="breadcrumbs">
      <Link to="/">Home</Link>

      {/* Genera i breadcrumbs dinamici */}
      {pathSegments.map((segment, index) => {
        // Costruisce il percorso corrente
        const path = `/${pathSegments.slice(0, index + 1).join("/")}`;

        // Se è un ID (non è un percorso mappato)
        const isId = !pathMap[segment] && !isNaN(parseInt(segment, 10));

        // Nome da visualizzare: usa il nome mappato o ID se è un ID, altrimenti il segmento
        const displayName =
          pathMap[segment] || (isId ? `#${segment}` : segment);

        return (
          <span key={path}>
            {" > "}
            {index === pathSegments.length - 1 ? (
              // Ultimo elemento (posizione corrente)
              <span>{displayName}</span>
            ) : (
              // Elementi precedenti (con link)
              <Link to={path}>{displayName}</Link>
            )}
          </span>
        );
      })}
    </div>
  );
}

export default Breadcrumbs;
