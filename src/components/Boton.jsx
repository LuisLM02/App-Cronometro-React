import React from "react";
import "../styles/Boton.css";

function Boton({ visibility, texto, clic, theme }) {
  return (
    <button 
      id={texto}
      className={visibility ? `${theme === "moon-outline" ? "white" : "black"}` : `none`}
      onClick={()=> clic()}>{texto}
      </button>
  );
}

export default Boton;
