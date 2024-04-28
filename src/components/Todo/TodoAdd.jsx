import React, { useContext, useState } from "react";
import { ProviderContext } from "../../utils/Provider";

export default function TodoAdd() {
  const [name, setName] = useState("");
  const { state, setState } = useContext(ProviderContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) {
      alert("Không thêm được");
      return;
    }
    setState({
      ...state,
      todoList: [...state.todoList, { name, completed: false }],
    });
    setName("");
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name..."
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <button>Add</button>
    </form>
  );
}
