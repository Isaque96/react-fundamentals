/* eslint-disable import/no-anonymous-default-export */
import React from "react";

import First from "./components/basics/First";
import WithParameter from "./components/basics/WithParameter";
import Fragment from "./components/basics/Fragment";

export default (_) => (
  <div>
    <h1>Exercícios Fundamentos</h1>
    <Fragment />
    <WithParameter titulo="Segundo Componente" aluno="Isaque" nota={9.8} />
    <First />
  </div>
);
