import React, { useState } from "react";
import "./Mega.css";

export default function Mega(props) {
  function gerarNumeroNaoContido(min, max, array) {
    const aleatorio = parseInt(Math.random() * (max + 1 - min)) + min;
    return array.includes(aleatorio)
      ? gerarNumeroNaoContido(min, max, array)
      : aleatorio;
  }

  function gerarNumeros(qtde) {
    const numeros = Array(qtde)
      .fill(0)
      .reduce((nums) => {
        const novoNumero = gerarNumeroNaoContido(1, 60, nums);
        return [...nums, novoNumero];
      }, [])
      .sort((n1, n2) => n1 - n2);

    return numeros;
  }

  const [qtde, setQtde] = useState(props.qtde || 6);
  const [numeros, setNumeros] = useState(gerarNumeros(qtde));

  return (
    <div className="Mega">
      <h2>MegaSena</h2>
      <h3>{numeros.join(" ")}</h3>
      <div>
        <label>Quantidade de Números</label>
        <input
          type="number"
          min={6}
          max={12}
          value={qtde}
          onChange={(e) => {
            const value = +e.target.value;
            setQtde(value);
            setNumeros(gerarNumeros(value));
          }}
        />
      </div>
      <button onClick={(_) => setNumeros(gerarNumeros(qtde))}>
        Gerar Números
      </button>
    </div>
  );
}
