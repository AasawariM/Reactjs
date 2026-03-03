import "./App.css";
import Gallery from "./components/Gallery";
// can also write as
// import Gallery from "./components/Gallery.jsx";
import { Profile } from "./components/Gallery";
function App() {
  return (
    <>
      <h1 className="text-2xl text-red-500 underline font-bold">
        Hello Tailwind
      </h1>
      <Gallery />
      <Profile />
    </>
  );
}

export default App;
