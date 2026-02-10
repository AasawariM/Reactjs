import { useState } from "react";
function App() {
  const [color, setColor] = useState("lightblue");

  return (
    <div
      className="flex justify-center items-center gap-5 text-center flex-col w-full h-screen"
      style={{ backgroundColor: color }}
    >
      <h1 className="sm:text-4xl text-3xl font-bold underline">
        Background Color Changer
      </h1>
      <h2>A small React Practice Project</h2>
      <div className="bg-gray-200 fixed bottom-12 px-4 py-2 rounded-2xl shadow-lg">
        <div className="flex flex-wrap gap-4 justify-center">
          <button
            onClick={() => {
              setColor("yellow");
            }}
            className="outline-none px-4 py-2 capitalize cursor-pointer bg-yellow-300 rounded-full shadow-lg"
          >
            yellow
          </button>
          <button
            onClick={() => {
              setColor("blue");
            }}
            className="outline-none px-4 py-2 capitalize cursor-pointer bg-blue-300 rounded-full shadow-lg"
          >
            blue
          </button>
          <button
            onClick={() => {
              setColor("red");
            }}
            className="outline-none px-4 py-2 capitalize cursor-pointer bg-red-300 rounded-full shadow-lg"
          >
            red
          </button>
          <button
            onClick={() => {
              setColor("green");
            }}
            className="outline-none px-4 py-2 capitalize cursor-pointer bg-green-300 rounded-full shadow-lg"
          >
            green
          </button>
          <button
            onClick={() => {
              setColor("orange");
            }}
            className="outline-none px-4 py-2 capitalize cursor-pointer bg-orange-300 rounded-full shadow-lg"
          >
            orange
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
