import "../assets/style.css";
import React, { useContext } from "react";
import Content from "./Content";
import { AppContext } from "../App03";
import ThemeToggle from "./ThemeToggle";

export default function Theme() {
  const { theme } = useContext(AppContext);

  return (
    <div className={`app theme-${theme}`}>
      <ThemeToggle />
      <Content />
    </div>
  );
}
