import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import PaginaInicial from './paginas/PaginaInicial';
import PaginaJogo from './paginas/PaginaJogo';
import PaginaConfiguracoes from './paginas/PaginaConfiguracoes';
import PaginaFeedback from './paginas/PaginaFeedback';
import PaginaRanking from './paginas/PaginaRanking';
import './App.css';
// Criando branch de backup
export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={PaginaInicial} />
        <Route exact path="/game" component={PaginaJogo} />
        <Route exact path="/feedback" component={PaginaFeedback} />
        <Route exact path="/ranking" component={PaginaRanking} />
        <Route exact path="/settings" component={PaginaConfiguracoes} />
        <Route path="" />
      </Switch>
    </BrowserRouter>
  );
}
