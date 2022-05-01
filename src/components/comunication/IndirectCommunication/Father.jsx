import React from "react";
import IndirectSon from "./Son";

export default function Father(props) {
  let nome = "?";
  let idade = 0;
  let nerd = false;

  function fornecerInformacoes(nomeParam, idadeParam, nerdParam) {
    nome = nomeParam;
    idade = idadeParam;
    nerd = nerdParam;

    console.log(nomeParam, idadeParam, nerdParam);
  }

  return (
    <div>
      <div>
        <span>{nome} </span>
        <span>
          <strong>{idade} </strong>
        </span>
        <span>{nerd ? "Verdadeiro" : "Falso"}</span>
      </div>
      <IndirectSon quandoClicar={fornecerInformacoes} />
    </div>
  );
}
