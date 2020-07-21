import React, { Component } from 'react';

class PaginaJogo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      imagem: '',
      pontuacao: '',
    };
  }

  render() {
    const { nome, imagem, pontuacao } = this.state;
    return (
      <div data-testid="">
        <Perfil />
      </div>
    );
  }
}


