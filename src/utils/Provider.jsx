import { createContext, useState } from "react";

export const ProviderContext = createContext();

export default function Provider({ children }) {
  const initialState = {
    todoList: [],
  };
  const [state, setState] = useState(initialState);
  return (
    <ProviderContext.Provider value={{ state, setState }}>
      {children}
    </ProviderContext.Provider>
  );
}
