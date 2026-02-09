import "./App.css";
import UserCard from "./components/UserCard";
import belly from "./assets/belly_girl.png";
import jeremiah from "./assets/jeremiah_boy.png";
import conrad from "./assets/conrad.avif";

function App() {
  return (
    <div className="container">
      {/* passing/transfering data with components call
      normal html mei is prakar tag ke andher likhe hue ko attribute kehte and in jsx it is called prop.
      // we are passing name desc img and style as props below
      */}
      <UserCard
        name="Conrad Fisher"
        img={conrad}
        description="I'm a Doctor"
        style={{ borderRadius: "30px", backgroundColor: "#b1ea92" }}
      />
      <UserCard
        name="Belly"
        img={belly}
        description="I'm a student"
        style={{ backgroundColor: "#f8f064" }}
      />
      {/* this will take border radius and bg color from userCard.css */}
      <UserCard name="Jeremiah" img={jeremiah} description="I'm a Cook" />
    </div>
  );
}
export default App;
