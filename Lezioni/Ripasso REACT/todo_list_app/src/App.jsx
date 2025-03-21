import {useState} from "react";
import TodoList from "./components/TodoList";
import AddTodoForm from "./components/AddTodoForm";
import styles from "./App.module.css";

function App() {
  const [todos, setTodos] = useState([]);

  const generateId = () => {
    return Math.floor(Math.random() * 10000);
  };

  const addTodo = (text) => {
    if (text.trim() == "") return;

    const newTodo = {
      id: generateId(),
      text: text,
      complete: false,
    };

    setTodos([...todos, newTodo]);
  };

  const toggleTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? {...todo, complete: !todo.complete} : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className={styles.container}>
      <h1>Todo List</h1>
      <AddTodoForm setTodos={setTodos} addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </div>
  );
}

export default App;
