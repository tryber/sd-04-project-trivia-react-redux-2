import React, { Component } from 'react';
import Input from '../componentes/Inicial/Input';
import Botao from '../componentes/Botao';
import { Link } from 'react-router-dom';
class PaginaInicial extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div data-testid="">
        <Input texto="Email" dataTestId="input-player-gravatar-email" />
        <Input texto="Nome" dataTestId="input-player-name" />
        <Link to="/jogo">
          <Botao texto="Jogar" dataTestId="btn-play" />
        </Link>
        <Link to="/configuracoes">
          <Botao texto="Configurações" dataTestId="btn-settings" />
        </Link>
      </div>
    );
  }
}

export default PaginaInicial;
