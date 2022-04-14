import React from "react";
import "./App.css";

import StudentsList from "./components/repetition/StudentsList";
import Family from "./components/basics/Family";
import FamilyMember from "./components/basics/FamilyMember";
import Card from "./components/layout/Card";
import Random from "./components/basics/Random";
import Fragment from "./components/basics/Fragment";
import WithParameter from "./components/basics/WithParameter";
import First from "./components/basics/First";

export default function App(_) {
  return (
    <div className="App">
      <h1>Exercícios Fundamentos React</h1>
      <div className="Cards">
        <Card titulo="Repetição" color="#FF4C65">
          <StudentsList />
        </Card>
        <Card titulo="Componente com Filhos" color="#00C8F8">
          <Family sobrenome="Silva">
            <FamilyMember nome="Pedro" />
            <FamilyMember nome="Ana" />
            <FamilyMember nome="Gustavo" />
          </Family>
        </Card>
        <Card titulo="Desafio Aleatório" color="#F46900">
          <Random min={1} max={60} />
        </Card>
        <Card titulo="Fragmento" color="#E94C6F">
          <Fragment />
        </Card>
        <Card titulo="Com Parâmetro" color="#E8871A">
          <WithParameter
            titulo="Segundo Componente"
            aluno="Isaque"
            nota={9.8}
          />
        </Card>
        <Card titulo="Primeiro" color="#588C73">
          <First />
        </Card>
      </div>
    </div>
  );
}
