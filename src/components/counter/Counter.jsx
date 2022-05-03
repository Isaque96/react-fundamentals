import React, { Component } from "react";
import "./Counter.css";

export default class Counter extends Component {
  // constructor(props) {
  //   super();
  //   this.state = {
  //     numero: props.numeroInicial,
  //   };
  //    this.inc = this.inc.bind(this)
  // }
  state = {
    numero: this.props.numeroInicial || 0,
    passo: this.props.passoInicial || 5,
  };

  // Se fizer uma função arrow tanto aqui quanto dentro do onClick funciona
  inc() {
    this.setState({
      numero: this.state.numero + this.state.passo,
    });
  }

  dec() {
    this.setState({
      numero: this.state.numero - this.state.passo,
    });
  }

  setPasso = (e) => {
    this.setState({
      passo: +e.target.value,
    });
  };

  render() {
    return (
      <div className="Counter">
        <h2>Contador</h2>
        <h3>Valor Atual: {this.state.numero}</h3>
        <div>
          <label htmlFor="passoInput">Passo: </label>
          <input
            id="passoInput"
            type="number"
            value={this.state.passo}
            onChange={this.setPasso}
          />
        </div>
        <button onClick={(_) => this.inc()}>+</button>
        <button onClick={(_) => this.dec()}>-</button>
      </div>
    );
  }
}
