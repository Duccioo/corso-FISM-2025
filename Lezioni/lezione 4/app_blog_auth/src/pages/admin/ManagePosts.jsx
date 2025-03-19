import {useState, useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";

function ManagePosts() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Simulazione fetch API
    setPosts([
      {id: 1, title: "Introduzione a React Router", status: "pubblicato"},
      {id: 2, title: "Route annidate in React", status: "pubblicato"},
      {id: 3, title: "Protected Routes con React", status: "bozza"},
    ]);
  }, []);

  const handleEdit = (postId) => {
    navigate(`/admin/posts/${postId}/edit`);
  };

  return (
    <div className="manage-posts">
      <h2>Gestione Articoli</h2>

      <div className="bottonenero">
        <button className="bottonenero">Nuovo Articolo</button>
      </div>

      <table className="posts-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Titolo</th>
            <th>Stato</th>
            <th>Azioni</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.status}</td>
              <td>
                <button onClick={() => handleEdit(post.id)}>Modifica</button>
                <Link to={`/blog/${post.id}`} target="_blank">
                  Visualizza
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ManagePosts;
