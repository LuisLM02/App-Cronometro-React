import React from 'react';
import "../styles/Nav.css";

function Nav({ theme }){
  return(
    <nav>
    <h1  className={`${theme === "moon-outline" ? "white" : "black"}`}>Cronómetro</h1>
  </nav>
  )
}

export default Nav;