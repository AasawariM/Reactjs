// Counter component receives data and functions from parent using props
// Here we are using destructuring to directly extract values from props object
// count = value passed from parent
// handleClick = function passed from parent
// children = JSX written inside <Counter>...</Counter> in parent

const Counter = ({ count, handleClick, children }) => {
  return (
    <div>
      {/* Display the count value received from App component */}
      <h1>{count}</h1>

      {/* When button is clicked, call the function received from parent */}
      {/* Child component does not change state directly */}
      {/* It asks parent to change state by calling parent's function */}
      <button onClick={handleClick}>Click Me</button>

      {/* children renders whatever JSX is written between Counter tags */}
      {children}
    </div>
  );
};

export default Counter;
