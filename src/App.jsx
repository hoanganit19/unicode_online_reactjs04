import React from "react";
import Provider from "./utils/Provider";
import Todo from "./components/Todo/Todo";

export default function App() {
  return (
    <Provider>
      <Todo />
    </Provider>
  );
}
