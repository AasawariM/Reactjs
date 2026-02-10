import { useState } from "react";
import "./App.css";
import Card from "./components/Card";
function App() {
  // create manage change state here only
  //sync this state acorss all child components
  const [name, setName] = useState("");
  return (
    <>
      {/* each child now can have access to both state variable and function */}
      <Card title="Card 1" name={name} setName={setName} />

      {/* for sibling  */}
      {/* with this see how input value is coming to both cards at the same time(in Sync). also input fields are in sync */}
      <Card title="Card 2" name={name} setName={setName} />

      {/* to see changes here in parent which are done in child component */}
      <p>I'm inside parent component and value of name variable is: {name}</p>
    </>
  );
}

export default App;

// so lifting state up concept is when we have a single parent component and multiple child components,
// and child components have their individual states which cannot work together so to have sync effect on both childs,
// we shift responsibility to the parent to create manage and change  state.
// so with parent passing the prop to child pass the setter function to both childs with which
// both childs are in sync with the state.
// we shift state to the parent component that is here and this parent component send the state variable and
// state changing function to the child component.
// with this any no of sibling child component can access the state value in sync.
