import React from "react";
import "../styles/BtnThem.css";

function BtnThem({ theme, clic }) {
  console.log(theme);
  return (
    <button
      className={`${theme === "moon-outline" ? "white" : "black"}`}
      id="theme-btn"
      onClick={() => clic()}
    >
      <ion-icon name={theme}></ion-icon>
    </button>
  );
}

export default BtnThem;
