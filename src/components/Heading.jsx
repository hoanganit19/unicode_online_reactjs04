import React, { useContext } from "react";
import { AppContext } from "../App";

export default function Heading() {
  const context = useContext(AppContext);
  return <h2>{context}</h2>;
}
