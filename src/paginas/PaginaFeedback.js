import React from 'react';
import { Link } from 'react-router-dom';
import store from '../redux/store';
import Perfil from '../componentes/Perfil';
import Botao from '../componentes/Botao';

const definirMsg = () => {
  const userData = store.getState();
  let msg = userData.userReducer.assertions >= 3 ? "Mandou bem!" : "Podia ser melhor...";
  return msg;
}

const PaginaFeedback = () => (
  <div>
    <Perfil />
    <div>{definirMsg()}</div>
    <Link to="/">
      <Botao texto="Jogar Novamente" dataTestId="btn-play-again" />
    </Link>
    <Link to="/ranking">
      <Botao texto="Ver Ranking" dataTestId="btn-ranking" />
    </Link>
  </div>
);

export default PaginaFeedback;

