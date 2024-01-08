import React from "react";

function Counter({ count, children }) {
    console.log("2",children)
  return (
    <>
      <div>
        {children} {count}
      </div>
    </>
  );
}
export default React.memo(Counter);