import React from "react";
import "./TableProducts.css";
import products from "../../components/data/products";

export default function TableProducts(props) {
  function getLinhas() {
    return products.map((prod, i) => {
      return (
        <tr key={prod.id} className={i % 2 === 0 ? "Par" : "Impar"}>
          <td>{prod.id}</td>
          <td>{prod.nome}</td>
          <td>{prod.preco.toFixed(2).replace(".", ",")}</td>
        </tr>
      );
    });
  }

  return (
    <div className="Table">
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Nome</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>{getLinhas()}</tbody>
      </table>
    </div>
  );
}
