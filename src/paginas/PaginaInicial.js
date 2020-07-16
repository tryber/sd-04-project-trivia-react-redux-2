import React, { Component } from 'react';
import Input from '../componentes';

class PaginaInicial extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div data-testid="">
        <Input />
      </div>
    );
  }
}

export default PaginaInicial;
