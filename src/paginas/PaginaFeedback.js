import React from 'react';
import { Link } from 'react-router-dom';
import Perfil from '../componentes/Perfil';
import Botao from '../componentes/Botao';

const PaginaFeedback = () => (
  <div>
    <Perfil />
    <Link to="/">
      <Botao texto="Jogar Novamente" data-testid="btn-play-again" />
    </Link>
    <Link to="/ranking">
      <Botao texto="Ver Ranking" data-testid="ranking-title" />
    </Link>
  </div>
);

export default PaginaFeedback;
