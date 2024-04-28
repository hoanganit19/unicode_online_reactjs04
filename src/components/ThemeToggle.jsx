import React, { useContext } from "react";
import { AppContext } from "../App03";

export default function ThemeToggle() {
  const { theme, setTheme } = useContext(AppContext);

  const handleChangeTheme = () => {
    //Cập nhật theme ở context
    setTheme(theme === "light" ? "dark" : "light");
  };
  return (
    <button onClick={handleChangeTheme}>
      Toggle {theme === "light" ? "Dark" : "Light"} Theme
    </button>
  );
}
