import React from 'react';
import { Link } from 'react-router-dom';
import Botao from '../componentes/Botao';

const PaginaRanking = () => (
  <div>
    <h1 data-testid="ranking-title">Ranking:</h1>
    <Link to="/">
      <Botao texto="Jogar" dataTestId="btn-go-home" />
    </Link>
  </div>
);

export default PaginaRanking;
