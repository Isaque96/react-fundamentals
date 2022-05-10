import React, { Component } from "react";
import Display from "./Display";
import StepForm from "./StepForm";
import Buttons from "./Buttons";
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
  inc = () => {
    this.setState({
      numero: this.state.numero + this.state.passo,
    });
  };

  dec = () => {
    this.setState({
      numero: this.state.numero - this.state.passo,
    });
  };

  setPasso = (novoPasso) => {
    this.setState({
      passo: novoPasso,
    });
  };

  render() {
    return (
      <div className="Counter">
        <h2>Contador</h2>
        <Display numero={this.state.numero} />
        <StepForm passo={this.state.passo} setPasso={this.setPasso} />
        <Buttons setInc={this.inc} setDec={this.dec} />
      </div>
    );
  }
}
