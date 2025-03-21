import {useState} from "react";
import styles from "./AddTodoForm.module.css";

function AddTodoForm({addTodo}) {
  const [text, setText] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
        placeholder="Aggiungi un nuovo todo"
        className={styles.input}
      />
      <button type="submit" className={styles.button}>
        Aggiungi
      </button>
    </form>
  );
}

export default AddTodoForm;
