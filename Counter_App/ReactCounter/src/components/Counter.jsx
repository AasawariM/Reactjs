import "../assets/Counter.css";
import { useState } from "react";

const Counter = () => {
  // State initialization (Destructuring)
  const [count, setCount] = useState(0);
  return (
    <div className="counter-container">
      {/* Rendering state in UI  */}
      <p id="para">You have clicked {count} times </p>
      <button
        id="counter-btn"
        // Updating state on click
        onClick={() => {
          // on click execute this function in which we are setting count to count+1 using setter function,
          // and in whole UI part anywhere count variable is used it will be updated.
          setCount(count + 1);
        }}
      >
        Click Me
      </button>
    </div>
  );
};

export default Counter;
