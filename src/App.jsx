import { useEffect, useRef } from "react";

function App() {
  const divRef = useRef();
  const inputRef = useRef();

  useEffect(() => {
    console.dir(divRef.current);
    divRef.current.innerHTML = `<h1>Học React không khó</h1>`;
    inputRef.current.focus();
  }, []);
  return (
    <>
      <div ref={divRef}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas quaerat,
        consequatur hic vel rerum cupiditate sit dignissimos culpa corporis qui
        iusto neque porro vero tempore possimus. Est, eos. Labore, est?
      </div>
      <input
        type="text"
        placeholder="Vui lòng nhập từ khóa tìm kiếm..."
        ref={inputRef}
      />
    </>
  );
}

export default App;

//DOMContentLoaded
//window.onload
