export default function TodoList({ isCompleted, id, note, toggleTodo, deleteTodo }) {
  return (
    <li key={id}>
      <label>
        <input
          type="checkbox"
          checked={isCompleted}
          onChange={(e) => {
            toggleTodo(id, e.target.checked);
          }}
        />
      </label>
      {note}
      <button className="btn btn-danger" onClick={() => deleteTodo(id)}>
        Delete
      </button>
    </li>
  );
}
