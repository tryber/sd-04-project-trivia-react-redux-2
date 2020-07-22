import React, { Component } from 'react';

class PaginaConfiguracoes extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
      <h1 data-testid="settings-title">
        Configurações:
        </h1>
        <label htmlFor="categoria">
          Categoria:
          <select>
            <option value="categoria">{category}</option>
          </select>
        </label>
          <label htmlFor="tipo">
          Tipo:
          <select>
            <option value="tipo">{type}</option>
          </select>
        </label>
        <label htmlFor="dificuldade">
        Dificuldade:
        <select>
          <option value="dificuldade">{type}</option>
        </select>
      </label>
      </div>
      
    ); {}
}

export default PaginaConfiguracoes;
