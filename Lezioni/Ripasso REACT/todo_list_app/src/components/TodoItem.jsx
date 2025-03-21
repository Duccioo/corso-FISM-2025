import styles from "./TodoItem.module.css";
import {useEffect} from "react";

function TodoItem({todo, toggleTodo, deleteTodo}) {
  useEffect(() => {
    const timer = setTimeout(() => {
      console.log("Ciao dopo 3 secondi");
    }, 3000);
    return () => {
      clearTimeout(timer);
      console.log("Ciao prima di 3 secondi");
      console.log(todo);
    };
  }, [todo]);

  return (
    <li className={styles.li}>
      <input
        type="checkbox"
        checked={todo.complete}
        onChange={() => toggleTodo(todo.id)}
        className={styles.checkbox}
      />

      <span className={styles.text}>{todo.text}</span>
      <button className={styles.deleteBtn} onClick={() => deleteTodo(todo.id)}>
        Elimina
      </button>
    </li>
  );
}

export default TodoItem;
