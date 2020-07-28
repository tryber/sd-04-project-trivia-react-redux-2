import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Perfil from '../componentes/Perfil';
import Botao from '../componentes/Botao';

const PaginaFeedback = ({ pontuacao, acertos }) => (
  <div>
    <Perfil />
    <div data-testid="feedback-text">{acertos >= 3 ? 'Mandou bem!' : 'Podia ser melhor...'}</div>
    <div data-testid="feedback-total-question">{acertos}</div>
    <div data-testid="feedback-total-score>">{pontuacao}</div>
    <Link to="/">
      <Botao texto="Jogar Novamente" dataTestId="btn-play-again" />
    </Link>
    <Link to="/ranking">
      <Botao texto="Ver Ranking" dataTestId="btn-ranking" />
    </Link>
  </div>
);

PaginaFeedback.propTypes = {
  pontuacao: PropTypes.number.isRequired,
  acertos: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  pontuacao: state.userReducer.score,
  acertos: state.userReducer.assertions,
});

export default connect(mapStateToProps)(PaginaFeedback);
