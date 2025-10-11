import { useState, useRef } from "react";

function Counter1() {
  const [count, setCount] = useState(0);
  const previousCount = useRef(0);

  const updateCount = () => {
    previousCount.current = count; // store old value
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Current Count: {count}</h1>
      <h2>Previous Count: {previousCount.current}</h2>
      <button onClick={updateCount}>Increase</button>
    </div>
  );
}

export default Counter1;
