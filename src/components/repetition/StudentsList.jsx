import React from "react";
import students from "../../components/data/students";

export default function StudentsList(props) {
  const studentsJsx = students.map((aluno) => {
    return (
      <li key={aluno.id}>
        {aluno.id}) {aluno.nome} {"->"} {aluno.nota}
      </li>
    );
  });

  return (
    <div style={{ width: "100%" }}>
      <ul style={{ listStyle: "none", padding: "0" }}>{studentsJsx}</ul>
    </div>
  );
}
