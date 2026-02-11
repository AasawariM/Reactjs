import { useState } from "react";
import "./App.css";
import Background from "./Components/Background/Background";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  // heroData array with 3 objects
  let heroData = [
    { text1: "Dive into", text2: "what you love" },
    { text1: "Indulge", text2: "your passions" },
    { text1: "Give in to", text2: "your passions" },
  ];
  //useState variables
  const [heroCount, setHeroCount] = useState(0);
  // to play and pause the video
  const [playStatus, setplayStatus] = useState(false);
  return (
    <div>
      {/* psasing 2 props to Background.jsx */}
      <Background heroCount={heroCount} playStatus={playStatus} />
      {/* navbar component */}
      <Navbar />
    </div>
  );
}

export default App;
