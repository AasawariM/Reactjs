const Card = (props) => {
  return (
    <div>
      {/* onChange = when input data changes */}
      {/* when event occurs call setName function using value entered in input field */}
      {/* with this change in input field will result in change in name state variable. */}
      <input
        type="text"
        value={props.name} //This keeps input value fully synced with state(both input fields have same value).
        onChange={(e) => props.setName(e.target.value)}
      />
      <p>
        Name Variable Value inside {props.title} : {props.name}
      </p>
      {/* still changes are visible in child end and we want changes visible from child to parent */}
    </div>
  );
};

export default Card;
