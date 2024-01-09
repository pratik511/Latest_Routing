import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../../Redux/counterSlice";

const Count = () => {
  const dispatch = useDispatch();
  const { value } = useSelector((state) => state?.counter);

  return (
    <div>
      <button onClick={() => dispatch(increment())}>+</button>
      Count: {value}
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
};

export default Count;
