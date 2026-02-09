import "./UserCard.css";
const UserCard = () => {
  return (
    <div className="user-container">
      <h1 id="user-name">John Doe</h1>
      <img
        src="https://plus.unsplash.com/premium_vector-1727955579176-073f1c85dcda?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        id="user-image"
        alt="profile photo"
      />
      <p id="user-desc">Description of John Doe</p>
    </div>
  );
};

export default UserCard;
