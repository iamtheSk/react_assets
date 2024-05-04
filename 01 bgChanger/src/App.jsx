import React from "react";
import { useState } from "react";

const App = () => {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="flex w-screen h-screen flex-wrap "
      style={{ "background-color": color }}>
      <div className="w-full flex items-center justify-center">
        <div className=" fixed flex items-center justify-evenly flex-wrap px-4 py-2 bottom-14  gap-2  rounded-full  bg-white shadow-lg">
          <button
            style={{ backgroundColor: "olive" }}
            className="px-4 py-2 rounded-3xl text-white shadow-lg"
            onClick={() => setColor("olive")}>
            olive
          </button>
          <button
            style={{ backgroundColor: "red" }}
            className="px-4 py-2 rounded-3xl text-white shadow-lg"
            onClick={() => setColor("red")}>
            Red
          </button>
          <button
            style={{ backgroundColor: "yellow" }}
            className="px-4 py-2 rounded-3xl text-black shadow-lg"
            onClick={() => setColor("yellow")}>
            Yellow
          </button>

          <button
            style={{ backgroundColor: "AliceBlue" }}
            className="px-4 py-2 rounded-3xl text-black shadow-lg"
            onClick={() => setColor("AliceBlue")}>
            AliceBlue
          </button>
          <button
            style={{ backgroundColor: "Aquamarine" }}
            className="px-4 py-2 rounded-3xl text-black shadow-lg"
            onClick={() => setColor("Aquamarine")}>
            Aqua
          </button>
          <button
            style={{ backgroundColor: "Indigo" }}
            className="px-4 py-2 rounded-3xl text-white shadow-lg"
            onClick={() => setColor("Indigo")}>
            Indigo
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
