import "./UserCard.css";
// we want different data for each UserCard call so we need to make it dynamic.
// this is done using props = used for data passing between components.
// receieving prop = UserCard ke andher data aa raha hoga props naam ka
// to access props we use curly braces {}.
// just like text and image we can also pass styles as props
const UserCard = (props) => {
  return (
    <div className="user-container" style={props.style}>
      <h1 className="user-name">{props.name}</h1>
      <img src={props.img} className="user-image" alt="profile photo" />
      <p className="user-desc">{props.description}</p>
    </div>
  );
};

export default UserCard;
