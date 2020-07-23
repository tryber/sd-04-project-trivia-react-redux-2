import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchToken, fetchTrivia } from '../redux/actions/apiActions';
import savePlayerData from '../redux/actions/userAction';
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
    this.getData = this.getData.bind(this);
  }

  getData() {
    const { getToken, getTrivia, saveData } = this.props;
    const { nome, email } = this.state;
    // getToken();
    // getTrivia();
    saveData(nome, email);
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
          <Botao
            texto="Jogar"
            dataTestId="btn-play"
            onClick={this.getData}
            condition={!nome || !email}
          />
        </Link>
        <Link to="/settings">
          <Botao texto="Configuracoes" dataTestId="btn-settings" />
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

PaginaInicial.propTypes = {
  getToken: PropTypes.func.isRequired,
  getTrivia: PropTypes.func.isRequired,
  saveData: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(PaginaInicial);
