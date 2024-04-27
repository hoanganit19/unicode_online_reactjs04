import { createContext } from "react";
import Content from "./components/Content";
import Heading from "./components/Heading";
export const AppContext = createContext(null);
export default function App() {
  return (
    <AppContext.Provider value={"Unicode Academy"}>
      <Content />
      <Heading />
    </AppContext.Provider>
  );
}
