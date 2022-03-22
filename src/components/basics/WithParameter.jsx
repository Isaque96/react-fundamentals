import React from "react";

export default function WithParameter(props) {
  const status = props.nota >= 7 ? "Aprovado" : "Reprovado";
  //props são ReadOnly
  //props.note = Math.ceil(props.nota);
  const notaArredonda = Math.ceil(props.nota);

  return (
    <div>
      <h2>{props.titulo}</h2>
      <p>
        <strong>{props.aluno} </strong>
        tem nota
        <strong> {notaArredonda} </strong>e foi
        <strong> {status}</strong>!
      </p>
    </div>
  );
}
