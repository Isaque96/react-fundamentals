import React from "react";

export default function Father(props) {
  const [min, max] = [50, 70];
  const gerarIdade = () => parseInt(Math.random() * (max - min)) + 50;
  const gerarNerd = () => Math.random() > 0.5;

  return (
    <div>
      <div>Filho</div>
      <button
        onClick={(_) => props.quandoClicar("Geylon", gerarIdade(), gerarNerd())}
      >
        Fornecer Informações
      </button>
    </div>
  );
}
