import React from "react";

export default function StepForm(props) {
  return (
    <div>
      <label htmlFor="passoInput">Passo: </label>
      <input
        id="passoInput"
        type="number"
        value={props.passo}
        onChange={(e) => props.setPasso(+e.target.value)}
      />
    </div>
  );
}
