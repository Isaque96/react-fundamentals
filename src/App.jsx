import React from "react";
import "./App.css";

import Counter from "./components/counter/Counter";
import Input from "./components/form/Input";
import IndirectFather from "./components/comunication/IndirectCommunication/Father.jsx";
import DirectFather from "./components/comunication/DirectCommunication/Father";
import UserInfo from "./components/conditional/UserInfo";
import EvenOrOdd from "./components/conditional/EvenOrOdd";
import TableProducts from "./components/repetition/TableProducts";
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
        <Card titulo="Contador" color="#88B04B">
          <Counter numeroInicial={10} />
        </Card>
        <Card titulo="Componente Controlado (Input)" color="#FFD700">
          <Input />
        </Card>
        <Card titulo="Comunicação Indireta" color="#8B008B">
          <IndirectFather />
        </Card>
        <Card titulo="Comunicação Direta" color="#D2691E">
          <DirectFather />
        </Card>
        <Card titulo="Renderização Condicional" color="#6B5B95">
          <EvenOrOdd numero={20} />
          <UserInfo user={{ nome: "Fernando" }} />
          <UserInfo user={{ email: "fer@gmail.com" }} />
          <UserInfo />
        </Card>
        <Card titulo="Desafio Repetição" color="#3A9AD9">
          <TableProducts />
        </Card>
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
        <Card titulo="Fragmento" color="#92A8D1">
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
