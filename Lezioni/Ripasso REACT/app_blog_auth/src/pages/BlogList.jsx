import {useState, useEffect} from "react";
import {Link, useNavigate} from "react-router-dom";

function BlogList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setLoading(true);
    // Simulazione di fetch API
    setTimeout(() => {
      setPosts([
        {
          id: 1,
          title: "Introduzione a React Router",
          excerpt: "Come utilizzare React Router per gestire la navigazione...",
        },
        {
          id: 2,
          title: "Route annidate in React",
          excerpt:
            "Le route annidate permettono di creare layout gerarchici...",
        },
        {
          id: 3,
          title: "Protected Routes con React",
          excerpt:
            "Impara a proteggere le tue route per gli utenti autenticati...",
        },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  const handlePostClick = (postId) => {
    navigate(`/blog/${postId}`);
  };

  if (loading) {
    return <div>Caricamento articoli...</div>;
  }

  return (
    <div className="blog-list">
      <h2>Articoli del Blog</h2>
      <div className="posts-grid">
        {posts.map((post) => (
          <article
            key={post.id}
            className="post-card"
            onClick={() => handlePostClick(post.id)}
          >
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
            <Link to={`/blog/${post.id}`}>Leggi tutto</Link>
          </article>
        ))}
      </div>
    </div>
  );
}

export default BlogList;
