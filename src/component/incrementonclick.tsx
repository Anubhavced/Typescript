import { useState } from "react";

function IncrementOnclick() {
  const [count, setCounter] = useState<number>(0);

  const increment = () => {
    setCounter(count +1);
  };
  const decrement = () => {
    setCounter(count -1); 
  }

  return (
    <div>
      <h2>Counter</h2>

      <div>{count}</div>

      <button onClick={increment}>Incr +</button>
      <button onClick={decrement}>Decr -</button>
    </div>
  );
}
export default IncrementOnclick;
