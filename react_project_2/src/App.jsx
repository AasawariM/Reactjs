import { useState } from "react";
import "./App.css";
import Counter from "./components/Counter";

function App() {
  // useState creates state variable and setter function
  // count = current value
  // setCount = function to update value
  const [count, setCount] = useState(0);

  // This function updates the state
  // It will be passed to child component as a prop
  function handleClick() {
    setCount(count + 1);
  }

  return (
    // Passing data and function to child component using props
    // count is passed as value prop
    // handleClick is passed as function prop
    // Anything written inside Counter tags becomes "children" prop

    <Counter count={count} handleClick={handleClick}>
      {/* These elements become props.children inside Counter */}
      <h2>this is content passed inside Counter</h2>
      <p>Hello from App.jsx</p>
    </Counter>
  );
}

export default App;
