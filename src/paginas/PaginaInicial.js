import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Input from '../componentes/Inicial/Input';
import Botao from '../componentes/Botao';

class PaginaInicial extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      email: '',
    };
    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler({ name, value }) {
    this.setState({ [name]: value });
    console.log(this.state);
  }

  render() {
    const { nome, email } = this.state;
    return (
      <div data-testid="">
        <Input name="nome" onChange={this.changeHandler} dataTestId="input-player-name" />
        <Input name="email" onChange={this.changeHandler} dataTestId="input-gravatar-email" />
        <Link to="/game">
          <Botao texto="Jogar" dataTestId="btn-play" condition={!nome || !email} />
        </Link>
        <Link to="/settings">
          <Botao texto="Configuracoes" dataTestId="btn-settings" />
        </Link>
      </div>
    );
  }
}

export default PaginaInicial;
