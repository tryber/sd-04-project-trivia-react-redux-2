import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const Perfil = ({ nome, imagem, pontos }) => (
  <div>
    <img src={`https://www.gravatar.com/avatar/${imagem}`} alt="avatar do jogador" data-testid="header-profile-picture" />
    <span data-testid="header-player-name">{nome}</span>
    <span data-testid="header-score">{pontos}</span>
  </div>
);

Perfil.propTypes = {
  nome: PropTypes.string.isRequired,
  imagem: PropTypes.string.isRequired,
  pontos: PropTypes.number.isRequired,
};

const mapStateToProps = (state) => ({
  nome: state.userReducer.name,
  imagem: state.userReducer.gravatarEmail,
  pontos: state.userReducer.score,
});

export default connect(mapStateToProps)(Perfil);
