import React, { useState } from "react";

export default function Input(props) {
  const [valor, setValor] = useState("Inicial");

  function quandoMudar(e) {
    setValor(e.target.value);
  }

  return (
    <div className="Input">
      <h2>{valor}</h2>
      <div>
        <input type="text" value={valor} onChange={(e) => quandoMudar(e)} />
        <input type="text" value={valor} readOnly />
        <input type="text" value={undefined} />
      </div>
    </div>
  );
}
