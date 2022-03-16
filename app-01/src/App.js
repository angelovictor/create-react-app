import React, { useState} from "react";

function App() {
  const [idade, setIdade] = useState("Informe sua Idade e Calcule");
  const handleIdadeChange = (event) => {
    setIdade(event.target.value);
  }

  return (
    <div className="App">
      <h1>Aula APP-01</h1>
    
      <label>Digite sua Idade:</label>
      <input type="number" id="ipt_idade" name="ipt_idade"></input>
      <br></br>
      <label>Ano de Nascimento:</label>
      <input type="number" id="ipt_nascimento" name="ipt_nascimento" value={idade} onChange={handleIdadeChange}></input>
      <br></br>
      <button id="btn_calcular" name="btn_calcular" onClick={() => setIdade(calcularIdade())}>Calcular Nascimento</button>
    </div>
  );
}

// Testes
/*function calcularIdade() {
  const ipt_idade = document.getElementById('ipt_idade');
  const data = new Date();
  const ano_atual = data.getFullYear();
  const nascimento = ano_atual - ipt_idade;

  return (nascimento);
}*/

export default App;
