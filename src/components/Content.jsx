import React, { useContext } from "react";
import { AppContext } from "../App";
export default function Content() {
  const context = useContext(AppContext);
  console.log(context);
  return (
    <div>
      <h2>{context}</h2>
    </div>
  );
}
