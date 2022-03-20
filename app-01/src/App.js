import React, { useState} from "react";

function App() {
  const [idade, setIdade] = useState("");
  const [ano_nascimento, setAnoNascimento] = useState("");
  const [check_aniversario, setCheckAniversario] = useState(false);

  const handleIdadeChange = (event) => {
    setIdade(event.target.value);
  }

  const handleNascimentoChange = (event) => {
    setAnoNascimento(event.target.value);
  }

  const handleCheckAniversarioChange = (event) => {
    setCheckAniversario(event.target.checked);
  }

  function calcularNascimento() {
    const data = new Date();
    const ano_atual = data.getFullYear();
    const nascimento = ano_atual - idade;
    
    if (!check_aniversario){
      setAnoNascimento(nascimento - 1);
    } else {
      setAnoNascimento(nascimento);
    };
    
    bloquearCampos();
  }

  function validarCampos() {
    if (!idade) {
      alert("Digite sua Idade!");
      return;
    }else{
      calcularNascimento();
    }
  }

  function bloquearCampos() {
    document.getElementById("ipt_idade").disabled = true;
    document.getElementById("cbox_aniversario").disabled = true;
    document.getElementById("btn_calcular").disabled = true;
  }

  function limparCampos() {
    setAnoNascimento("");
    setIdade("");
    setCheckAniversario(false);
    document.getElementById("ipt_idade").disabled = false;
    document.getElementById("cbox_aniversario").disabled = false;
    document.getElementById("btn_calcular").disabled = false;

    alert("Campos Limpos!");
  }
  
  return (
    <div className="App">
      <h1>Cálculo do Ano de Nascimento</h1>
    
      <label>Digite sua Idade:</label>
      <input type="number" id="ipt_idade" value={idade} onChange={handleIdadeChange}></input>

      <label>Ano de Nascimento:</label>
      <input id="ipt_nascimento" disabled="true" value={ano_nascimento} onChange={handleNascimentoChange}></input>

      <label>
        Já Fez Aniversário? Marcar para Sim:
        <input type="checkbox" id="cbox_aniversario" checked={check_aniversario} onChange={handleCheckAniversarioChange}></input>
      </label>
      
      <div className="Button">
        <button id="btn_calcular" onClick={() => validarCampos()}>Calcular Nascimento</button>
        <button id="btn_limpar" onClick={() => limparCampos()}>Limpar Campos</button>
      </div>
    </div>
  );
}

export default App;