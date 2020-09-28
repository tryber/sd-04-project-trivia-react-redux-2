import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { MD5 } from 'crypto-js';
import { savePlayerData } from '../redux/actions/userAction';
import Input from '../componentes/Inicial/Input';
import Botao from '../componentes/Botao';
import './login.css';
import trybeLogo from '../assets/trybeLogo.png';

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
    const { saveData } = this.props;
    const { nome, email } = this.state;
    saveData(nome, MD5(email).toString());
  }

  changeHandler({ name, value }) {
    this.setState({ [name]: value });
  }

  render() {
    const { nome, email } = this.state;
    return (
      <div className="container">
        <form data-testid="" className="form-signin">
          <img src={trybeLogo} className="mb-4" alt="Trybe logo" />
          <h1 className="h3 mb-3 font-weight-normal">Faça seu login</h1>
          <Input name="nome" onChange={this.changeHandler} dataTestId="input-player-name" />
          <Input name="email" onChange={this.changeHandler} dataTestId="input-gravatar-email" />
          <Link to="/game" className="text-link">
            <Botao
              nameClass="btn btn-lg btn-success btn-block"
              texto="Jogar"
              dataTestId="btn-play"
              onClick={this.getData}
              condition={!nome || !email}
              type="submit"
            />
          </Link>
          <Link to="/settings" className="text-link">
            <Botao
              texto="Configuracoes"
              dataTestId="btn-settings"
              nameClass="btn btn-lg btn-secondary btn-block"
            />
          </Link>
          <p className="mt-5 mb-3 text-muted">
            Desenvolvido por{' '}
            <a href="https://www.linkedin.com/in/matheusysd/">Matheus Domingos</a>.
          </p>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  saveData: (name, email) => dispatch(savePlayerData(name, email)),
});

PaginaInicial.propTypes = {
  saveData: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(PaginaInicial);
