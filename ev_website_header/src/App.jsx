import { useState } from "react";
import "./App.css";
import Background from "./Components/Background/Background";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";

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
  const [playStatus, setPlayStatus] = useState(false);
  return (
    <div>
      {/* psasing 2 props to Background.jsx */}
      <Background heroCount={heroCount} playStatus={playStatus} />
      {/* navbar component */}
      <Navbar />
      {/* passing all props with hero component */}
      <Hero
        playStatus={playStatus}
        setPlayStatus={setPlayStatus}
        heroData={heroData[heroCount]}
        heroCount={heroCount}
        setHeroCount={setHeroCount}
      />
    </div>
  );
}

export default App;
