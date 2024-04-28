import "../../assets/style.css";
import React from "react";
import TodoList from "./TodoList";
import TodoAdd from "./TodoAdd";

export default function Todo() {
  return (
    <div className="todo-app">
      <h1>Todo App</h1>
      <TodoList />
      <TodoAdd />
    </div>
  );
}
