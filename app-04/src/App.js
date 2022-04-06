import React, { useRef, useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import "./App.css";
import { About } from "./pages/About";
import { Home } from "./pages/Home";

function App() {
  const [disabledAnterior, setDisabledAnterior] = useState(true);
  const [disabledProximo, setDisabledProximo] = useState(false);
  const btnAnteriorRef = useRef();
  const btnProximoRef = useRef();

  function bloquearButton() {
    const nomePath = window.location.pathname;
    console.log(nomePath)
    if (nomePath === "/") {
      setDisabledProximo(true);
      setDisabledAnterior(false);
    }else{
      setDisabledProximo(false);
      setDisabledAnterior(true);
    }
  }
  
  return (
    <div className="App">
      <Link to="/">
        <button ref={btnAnteriorRef} disabled={disabledAnterior} onClick={() => bloquearButton()}>ANTERIOR</button>
      </Link>
      <Link to="/about">
        <button ref={btnProximoRef} disabled={disabledProximo} onClick={() => bloquearButton()}>PRÓXIMO</button>
      </Link>

      <h1>Welcome to React Router!</h1>{" "}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />}>
          <Route path=":aboutID" element={<About />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
