import {useState, useEffect} from "react";
import {useParams, useNavigate} from "react-router-dom";
import {useAuth} from "../context/AuthContext";

function BlogPost() {
  const {postId} = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const {isAuthenticated} = useAuth();

  useEffect(() => {
    setLoading(true);
    // Simulazione fetch API del post specifico
    setTimeout(() => {
      // In un'app reale, faresti una chiamata API con postId
      const fakePost = {
        id: parseInt(postId),
        title: `Articolo #${postId}`,
        content: `Questo è il contenuto completo dell'articolo ${postId}. Molte più informazioni qui...`,
        author: "Mario Rossi",
        date: "15 Marzo 2025",
      };
      setPost(fakePost);
      setLoading(false);
    }, 1000);
  }, [postId]);

  if (loading) {
    return <div>Caricamento articolo...</div>;
  }

  if (!post) {
    return <div>Articolo non trovato</div>;
  }

  return (
    <div className="blog-post">
      <h2>{post.title}</h2>
      <div className="meta">
        <span>Autore: {post.author}</span>
        <span>Data: {post.date}</span>
      </div>

      <div className="content">{post.content}</div>

      <div className="actions">
        <button onClick={() => navigate(-1)}>Torna indietro</button>

        {isAuthenticated && (
          <button onClick={() => navigate(`/admin/posts/${postId}/edit`)}>
            Modifica
          </button>
        )}
      </div>
    </div>
  );
}

export default BlogPost;
