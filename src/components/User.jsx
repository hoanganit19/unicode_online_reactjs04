import React, { useEffect, useRef, useState } from "react";
import "../assets/style.css";
export default function User() {
  const [users, setUsers] = useState([]);
  const [deleteCount, setDeleteCount] = useState(0);
  const checkboxListRef = useRef([]);

  const handleCheckAll = (e) => {
    const status = e.target.checked;
    if (status) {
      setDeleteCount(checkboxListRef.current.length);
    } else {
      setDeleteCount(0);
    }
    checkboxListRef.current.forEach((checkbox) => {
      if (checkbox) {
        checkbox.checked = status;
      }
    });
  };

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then((res) => res.json())
      .then((users) => setUsers(users));
  }, []);

  //   useEffect(() => {
  //     console.log(checkboxListRef);
  //   }, [users]);

  return (
    <div>
      <label>
        <input type="checkbox" onChange={handleCheckAll} /> Check All
      </label>

      <hr />
      {users.map(({ id, name }, index) => (
        <label key={id}>
          <input
            type="checkbox"
            ref={(ref) => {
              checkboxListRef.current[index] = ref;
            }}
          />{" "}
          {name}
        </label>
      ))}
      <button disabled={!deleteCount}>Xóa đã chọn ({deleteCount})</button>
    </div>
  );
}
