import React from "react";
import If, { jsElseCondition as Else } from "./If";

export default function UserInfo(props) {
  const usuario = props.user || {};

  return (
    <div>
      <If test={usuario && usuario.nome}>
        Seja bem vindo <strong>{usuario.nome}</strong>!
        <Else>
          Seja bem vindo <strong>Amigão</strong>!
        </Else>
      </If>
    </div>
  );
}
