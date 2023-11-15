import React, { useState, useEffect } from "react";
import Light from "./Light";

const App = () => {
  const [activeLight, setActiveLight] = useState("red");

  useEffect(() => {
    const interval = setInterval(() => {
      switch (activeLight) {
        case "red":
          setActiveLight("yellow");
          break;
        case "yellow":
          setActiveLight("green");
          break;
        case "green":
          setActiveLight("red");
        default:
          setActiveLight("red");
      }
    }, 3000);

    return () => clearInterval(interval);
  }),
    [activeLight];
  const handleButtonClick = () => {
    switch (activeLight) {
      case "red":
        setActiveLight("yellow");
        break;
      case "yellow":
        setActiveLight("green");
        break;
      case "green":
        setActiveLight("red");
        break;
      default:
        setActiveLight("red");
    }
  };

  return (
    <>
      <div className="bg-black m-auto base" />
      <div className="d-flex flex-column g-1 p-1 m-auto trafficLight">
        <Light color="red" opacity={activeLight === "red" ? 1 : 0.4} />
        <Light color="yellow" opacity={activeLight === "yellow" ? 1 : 0.4} />
        <Light
          color="rgb(0,255,0)"
          opacity={activeLight === "green" ? 1 : 0.4}
        />
      </div>
      <h1 style={{ margin: "auto", width: "fit-content" }}>{activeLight}</h1>
      <button
        className="d-flex m-auto my-5 bg-success"
        onClick={handleButtonClick}
      >
        Change Light
      </button>
    </>
  );
};
export default App;
