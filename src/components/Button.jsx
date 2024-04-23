import { forwardRef } from "react";
function Button({ label }, ref) {
  return (
    <div>
      <button ref={ref}>{label}</button>
    </div>
  );
}

export default forwardRef(Button);

//forwardRef --> Chuyển ref từ component này qua component khá
//forwardRef --> Higher Order Componet (HOC)
