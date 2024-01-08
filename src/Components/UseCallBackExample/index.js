import React, { useCallback, useMemo, useState } from "react";
import Counter from "./Counter";
import Button from "./Button";

export default function UseCallBackExample() {
  const [count, setCount] = useState(25);
  const [salaryCount, setSalaryCount] = useState(25000);

  const incrementCount = useCallback(() => {
    setCount(count + 1);
  }, [count]);

  const incrementsalaryCount = useCallback(() => {
    setSalaryCount(salaryCount + 1000);
  }, [salaryCount]);
  const countValue = useMemo(() => count, [count]);
  const salaryCountValue = useMemo(() => salaryCount, [salaryCount]);

  return (
    <React.Fragment>
      <Counter count={countValue}>Counter : </Counter>
      <Button incrementHandler={incrementCount}>Counter Increment</Button>
      <br />
      <br />
      <Counter count={salaryCountValue}>Salary Counter : </Counter>
      <Button incrementHandler={incrementsalaryCount}>
        Salary Counter Increment
      </Button>
    </React.Fragment>
  );
}
