import { useState } from "react";
import "./style.css";
import NewTodoForm from "./components/NewTodoForm";
import TodoList from "./components/TodoList";

export default function App() {
  const [todos, setTodos] = useState([]);

  function addTodo(note) {
    setTodos((prevTodo) => {
      return [
        ...prevTodo,
        { id: crypto.randomUUID(), note, isCompleted: false },
      ];
    });
  }

  function toggleTodo(id, isCompleted) {
    setTodos((prevTodo) => {
      return prevTodo.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isCompleted };
        }
        return todo;
      });
    });
  }

  function deleteTodo(id) {
    setTodos((prevTodo) => {
      return prevTodo.filter((todo) => todo.id !== id);
    });
  }
  return (
    <>
      <NewTodoForm addTodo={addTodo} />
      <h1 className="header">Todo List</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo} />
    </>
  );
}
