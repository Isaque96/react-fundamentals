import React from "react";

import Card from "./components/layout/Card";
import Random from "./components/basics/Random";
import Fragment from "./components/basics/Fragment";
import WithParameter from "./components/basics/WithParameter";
import First from "./components/basics/First";

export default function App(_) {
  return (
    <div id="app">
      <h1>Exercícios Fundamentos React</h1>
      <Card titulo="Desafio Aleatório">
        <Random min={1} max={60} />
      </Card>
      <Card titulo="Fragmento">
        <Fragment />
      </Card>
      <Card titulo="Com Parâmetro">
        <WithParameter titulo="Segundo Componente" aluno="Isaque" nota={9.8} />
      </Card>
      <Card titulo="Primeiro">
        <First />
      </Card>
    </div>
  );
}
