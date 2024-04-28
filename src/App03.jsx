import { createContext, useState } from "react";
import Theme from "./components/Theme";
export const AppContext = createContext();
export default function App() {
  const [theme, setTheme] = useState("light");
  return (
    <AppContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      <Theme />
    </AppContext.Provider>
  );
}
