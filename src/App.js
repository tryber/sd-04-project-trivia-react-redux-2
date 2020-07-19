import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PaginaInicial from './paginas/PaginaInicial';
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={PaginaInicial} />
        <Route exact path="/game" />
        <Route exact path="/feedback" />
        <Route exact path="/ranking" />
        <Route exact path="/settings" />
        <Route path="" />
      </Switch>
    </BrowserRouter>
  );
}
