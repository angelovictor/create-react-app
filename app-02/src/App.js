import React, { useState} from "react";

function App() {
  const [dolar, setDolar] = useState("");
  const [real, setReal] = useState("");
  const [taxa, setTaxa] = useState("");

  const handleDolarChange = (event) => {
    setDolar(event.target.value);
  }

  const handleRealChange = (event) => {
    setReal(event.target.value);
  }

  const handleTaxaChange = (event) => {
    setTaxa(event.target.value);
  }

  /* examples useEffrects: https://pt-br.reactjs.org/docs/hooks-effect.html
  function calcularReal() {
    const data = new Date();
    const ano_atual = data.getFullYear();
    const nascimento = ano_atual - dolar;
    
    if (!taxa){
      setReal(nascimento - 1);
    } else {
      setReal(nascimento);
    };
    
    bloquearCampos();
  }

  function validarCampos() {
    if (!dolar) {
      alert("Digite sua Dolar!");
      return;
    }else{
      calcularReal();
    }
  }

  function bloquearCampos() {
    document.getElementById("ipt_dolar").disabled = true;
    document.getElementById("cbox_aniversario").disabled = true;
    document.getElementById("btn_calcular").disabled = true;
  }

  function limparCampos() {
    setReal("");
    setDolar("");
    setTaxa(false);
    document.getElementById("ipt_dolar").disabled = false;
    document.getElementById("cbox_aniversario").disabled = false;
    document.getElementById("btn_calcular").disabled = false;

    alert("Campos Limpos!");
  }*/
  
  return (
    <div className="App">
      <h1>Conversor de Dolar para Real</h1>
    
      <label>Digite o Valor em Dolar:</label>
      <input type="number" id="ipt_dolar" value={dolar} onChange={handleDolarChange}></input>

      <label>Digite o Valor em Real:</label>
      <input type="number" id="ipt_real" value={real} onChange={handleRealChange}></input>

      <label>Digite o Valor da Taxa:</label>
      <input type="number" id="ipt_taxa" checked={taxa} onChange={handleTaxaChange}></input>
    </div>
  );
}

export default App;