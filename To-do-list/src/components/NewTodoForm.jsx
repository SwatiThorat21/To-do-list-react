import { useState } from "react";

export default function NewTodoForm({ addTodo }) {
  const [newItem, setNewItem] = useState("");

  function handleOnSubmit(e) {
    e.preventDefault();
    if (newItem === "") return;
    addTodo(newItem);
    setNewItem("");
  }

  return (
    <form className="new-item-form" onSubmit={handleOnSubmit}>
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input
          value={newItem}
          type="text"
          id="item"
          onChange={(e) => setNewItem(e.target.value)}
        />
      </div>
      <button className="btn">Add</button>
    </form>
  );
}
