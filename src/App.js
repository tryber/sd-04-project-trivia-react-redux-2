import React from 'react';
import PaginaInicial from './paginas/PaginaInicial';
import PaginaJogo from './paginas/PaginaJogo';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={PaginaInicial} />
        <Route exact path="/game" component={PaginaJogo} />
        <Route exact path="/feedback" />
        <Route exact path="/settings" />
        <Route exact path="/ranking" />
        <Route path="/" />
      </Switch>
    </BrowserRouter>
  );
}
