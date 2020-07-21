import React from 'react';
import PropTypes from 'prop-types';

const Perfil = ({ nome, imagem, pontos }) => (
  <div>
    <span>${nome}</span>
    <img src={imagem} />
    <span>${pontos}</span>
  </div>
);

Perfil.propTypes = {
  nome: PropTypes.string.isRequired,
  imagem: PropTypes.string.isRequired,
  pontos: PropTypes.number.isRequired,
};

export default Perfil;
