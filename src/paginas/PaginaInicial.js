import React, { Component } from 'react';
import Input from '../componentes/Inicial/Input';
import Botao from '../componentes/Botao';
import savePlayerData from '../actions/playerActions';
import { Link } from 'react-router-dom';
import { fetchToken, fetchTrivia } from '../actions/apiActions';
import { connect } from 'react-redux';
class PaginaInicial extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nome: '',
      email: '',
    };
    this.changeHandler = this.changeHandler.bind(this);
    this.getData = this.getData.bind(this);
  }

  getData() {
    const { getToken, getTrivia, saveData } = this.props;
    const { nome, email } = this.state;
    getToken();
    getTrivia();
    saveData(nome, email);
  }

  changeHandler({ name, value }) {
    this.setState({ [name]: value });
  }

  render() {
    const { nome, email } = this.state;
    return (
      <div data-testid="">
        <Input onChange={this.changeHandler} name="nome" dataTestId="input-player-name" />
        <Input onChange={this.changeHandler} name="email" dataTestId="input-gravatar-email" />
        <Link to="/game">
          <Botao
            texto="Jogar"
            condition={!nome || !email}
            dataTestId="btn-play"
            onClick={() => {
              this.getData();
            }}
          />
        </Link>
        <Link to="/settings">
          <Botao texto="Configurações" />
        </Link>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  getToken: () => dispatch(fetchToken()),
  getTrivia: () => dispatch(fetchTrivia()),
  saveData: (name, email) => dispatch(savePlayerData(name, email)),
});

export default connect(null, mapDispatchToProps)(PaginaInicial);
