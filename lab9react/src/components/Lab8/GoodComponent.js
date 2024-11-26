import { useState } from "react";

function GoodComponent({ initialCount }) {
  const [count, setCount] = useState(initialCount);

  return (
    <div>
      <h2>Current count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default GoodComponent;