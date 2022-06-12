import React from "react";
import "../styles/Display.css";

function Display({ time, theme }) {
  return (
    <div className={"contenedor"}>
      <div className="display">
        <span id="reloj">{time}</span>
      </div>
    </div>
  );
}

export default Display;
