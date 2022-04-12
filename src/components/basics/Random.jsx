import React from "react";

export default function Random(props) {
  const { min, max } = props;

  // destructuring
  // const [a,b] = [1,2];
  // const {c,d,x} = { c: 12, b: 45, x: 'teste'};

  const random = parseInt(Math.random() * (max - min)) + min;

  return (
    <div>
      <h2>Valor Aleatório</h2>
      <p>
        <strong>Valor Mínimo: </strong>
        {props.min}
      </p>
      <p>
        <strong>Valor Mínimo: </strong>
        {props.max}
      </p>
      <p>
        <strong>Valor Escolhido: </strong>
        {random}
      </p>
    </div>
  );
}
