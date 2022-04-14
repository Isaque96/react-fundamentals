import React from "react";

export default function FamilyMember(props) {
  return (
    <div>
      {props.nome} <strong>{props.sobrenome}</strong>
    </div>
  );
}
