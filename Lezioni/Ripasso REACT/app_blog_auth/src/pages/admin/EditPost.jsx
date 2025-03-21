import {useState, useEffect} from "react";
import {useParams, useNavigate} from "react-router-dom";

function EditPost() {
  const {postId} = useParams();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const [post, setPost] = useState({
    title: "",
    content: "",
    status: "pubblicato",
  });

  useEffect(() => {
    setLoading(true);

    // Simulazione fetch API per recuperare i dati del post
    setTimeout(() => {
      // In un'app reale, faresti una chiamata API con postId
      setPost({
        id: parseInt(postId),
        title: `Articolo #${postId}`,
        content: `Questo è il contenuto dell'articolo ${postId}...`,
        status: postId === "3" ? "bozza" : "pubblicato",
      });
    }, 1000);
    setLoading(false);
  }, [postId]);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setPost({
      ...post,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Qui implementeresti una chiamata API per salvare il post
    console.log("Salvataggio post:", post);

    // Simulazione salvataggio riuscito
    alert("Post salvato con successo!");

    // Ritorna alla lista
    navigate("/admin/posts");
  };

  if (loading) return <p>Caricamento...</p>;

  if (!loading) {
    return (
      <div className="edit-post">
        <h2>Modifica Articolo</h2>

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="title">Titolo:</label>
            <input
              type="text"
              id="title"
              name="title"
              value={post.title}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="content">Contenuto:</label>
            <textarea
              id="content"
              name="content"
              value={post.content}
              onChange={handleChange}
              rows="10"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="status">Stato:</label>
            <select
              id="status"
              name="status"
              value={post.status}
              onChange={handleChange}
            >
              <option value="pubblicato">Pubblicato</option>
              <option value="bozza">Bozza</option>
            </select>
          </div>

          <div className="form-actions">
            <button type="submit">Salva</button>
            <button type="button" onClick={() => navigate("/admin/posts")}>
              Annulla
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default EditPost;
