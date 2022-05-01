import React from "react";

export default function Father(props) {
  return (
    <div>
      <div>Filho</div>
      <button onClick={(_) => props.quandoClicar("Geylon", 35, true)}>
        Fornecer Informações
      </button>
    </div>
  );
}
