import React, { useContext } from "react";
import { ProviderContext } from "../../utils/Provider";

export default function TodoList() {
  const { state, setState } = useContext(ProviderContext);
  const { todoList } = state;
  const handleRemove = (index) => {
    setState({
      ...state,
      todoList: state.todoList.filter((_, _index) => _index !== index),
    });
  };
  const handleCompleted = (index) => {
    setState({
      ...state,
      todoList: state.todoList.map((todo, _index) => {
        if (index === _index) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };
  return (
    <ul>
      {todoList.map((todo, index) => (
        <li key={index}>
          <input type="checkbox" onChange={() => handleCompleted(index)} />
          <span className={`${todo.completed ? "completed" : ""}`}>
            {todo.name}
          </span>
          <span
            style={{ cursor: "pointer" }}
            onClick={() => handleRemove(index)}
          >
            &times;
          </span>
        </li>
      ))}
    </ul>
  );
}
