import { React, useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  function handleAdd() {
    setCount(count + 1);
  }
  function handleSub() {
    setCount(count - 1);
  }
  function handleReset() {
    setCount(0);
  }

  return (
    <div className="counter">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <p>{count}</p>
      <div>
        <button type="button" onClick={handleAdd}>
          Add
        </button>
        <button type="button" onClick={handleSub}>
          Sub
        </button>
        <button type="button" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
};

export default Counter;
