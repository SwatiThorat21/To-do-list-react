import TodoItem from "./TodoItem";

export default function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul className="list">
      {todos.length === 0 && "Please add todo"}
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            id={todo.id}
            note={todo.note}
            isCompleted={todo.isCompleted}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </ul>
  );
}
