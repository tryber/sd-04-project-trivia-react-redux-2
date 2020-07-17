import React from 'react';
import logo from './trivia.png';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import PaginaInicial from './paginas/PaginaInicial';
import './App.css';
// Só pra commitar
export default function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route exact path="/" component={PaginaInicial} />
      <Route exact path="/jogo"  />
      <Route exact path="/feedback"  />
      <Route exact path="/configuracoes"  />
      <Route exact path="/ranking" />
      <Route path="/" />

    </Switch>
    </BrowserRouter>
  );
}
