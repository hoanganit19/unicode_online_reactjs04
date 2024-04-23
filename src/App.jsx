import { useRef } from "react";
import { useState } from "react";

function App() {
  // const [count, setCount] = useState(0);
  const countRef = useRef(0);
  const handleClick = () => {
    // setCount(count + 1);
    countRef.current++;
    console.log(countRef.current);
  };
  return (
    <>
      {/* <h1>Unicode Academy: {count}</h1> */}
      <h2>Count: {countRef.current}</h2>
      <button onClick={handleClick}>Click me</button>
    </>
  );
}

export default App;
