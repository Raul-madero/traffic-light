import React, { useEffect, useState } from "react";

//include images into your bundle

//create your first component
const Light = () => {
  const [selected, setSelected] = useState(false);
  const [color, setColor] = useState("apagado");
  return (
    <div className="d-flex flex-column align-items-center justify-content-center p-5 mx-auto mt-5 semaforo">
      <button
        className={encendido ? setColor("red") : color}
        onClick={() => {
          setSelected(true);
        }}
      ></button>
      <button
        className={selected ? setColor("yellow") : color}
        onClick={() => {
          setSelected(true);
        }}
      ></button>
      <button
        className={selected ? setColor("green") : color}
        onClick={() => {
          setSelected(true);
        }}
      ></button>
    </div>
  );
};
const Home = () => {
  return <Light />;
};

export default Home;
