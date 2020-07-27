import React from 'react';
import { Link } from 'react-router-dom';
import Perfil from '../componentes/Perfil';
import Botao from '../componentes/Botao';

const PaginaFeedback = () => (
  <div>
    <header>
      <img src="" alt="" data-testid="header-profile-picture" />
      <span data-testid="header-player-name"></span>
      <span data-testid="header-score"></span>
    </header>

    <Link to="/">
      <Botao texto="Jogar Novamente" dataTestId="btn-play-again" />
    </Link>
    <Link to="/">
      <Botao texto="Ver Ranking" dataTestId="ranking-title" />
    </Link>
  </div>
);

export default PaginaFeedback;
