import React from "react";
import "../styles/App.css";
import Boton from "./Boton";
import BtnThem from "./BtnThem";
import Display from "./Display";
import Nav from "./Nav";
import { useState } from "react";

let tempo,
  min = 0,
  seg = 0,
  mili =0;

function App() {
  const [inicioV, setInicioV] = useState(1),
    [continuarV, setContinuarV] = useState(0),
    [detenerV, setDetenerV] = useState(0),
    [reiniciarV, setReiniciarV] = useState(0),
    [display, setDisplay] = useState("00:00.0"),
    [theme, setTheme] = useState(localStorage.getItem("theme"));

  function clicInicio() {
    setDetenerV(1);
    setReiniciarV(1);
    setInicioV(0);

    tempo = setInterval(() => {
      mili++;

      if(mili  === 10){
        seg++;
        mili = 0;
      }
      if (seg === 60) {
        min++;
        seg = 0;
      }

      setDisplay(`${("0" + min).substr(-2)}:${("0" + seg).substr(-2)}.${mili}`);
    }, 100);
  }

  function clicDetener() {
    clearInterval(tempo);
    setContinuarV(1);
    setDetenerV(0);
  }

  function clicContinuar() {
    setDetenerV(1);
    setReiniciarV(1);
    setContinuarV(0);

    tempo = setInterval(() => {
      mili++;

      if(mili  === 10){
        seg++;
        mili = 0;
      }
      if (seg === 60) {
        min++;
        seg = 0;
      }

      setDisplay(`${("0" + min).substr(-2)}:${("0" + seg).substr(-2)}.${mili}`);
    }, 100);
  }

  function clicReiniciar() {
    setInicioV(1);
    setDetenerV(0);
    setContinuarV(0);
    setReiniciarV(0);

    clearInterval(tempo);
    min = 0;
    seg = 0;
    mili = 0;

    setDisplay("00:00.0");
  }

  function cambiarTema(){
    if(theme !== "moon-outline"){
      setTheme("moon-outline");
      localStorage.setItem("theme", "moon-outline");
    } else {
      setTheme("sunny-outline");
      localStorage.setItem("theme", "sunny-outline");

    }
    
  }
  return (
    <div className={`App ${theme === "moon-outline" ? "white-display" : "black-display"}`}>
      <Nav 
        theme={theme} />
      <Display
        time={display}
        theme={theme} />

      <div className="botones">
        <Boton 
          texto="Inicio" 
          visibility={inicioV}
          clic={clicInicio}
          theme={theme} />
        <Boton 
          texto="Continuar" 
          visibility={continuarV}
          clic={clicContinuar}
          theme={theme} />
        <Boton 
          texto="Detener" 
          visibility={detenerV}
          clic={clicDetener}
          theme={theme} />
        <Boton 
          texto="Reiniciar" 
          visibility={reiniciarV}
          clic={clicReiniciar}
          theme={theme} />
      </div>

      <BtnThem
        theme={theme}
        clic={cambiarTema} />
    </div>
  );
}

export default App;
