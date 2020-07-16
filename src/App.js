import React from 'react';
import {
  BrowserRouter,
  Switch,
  Route,
} from 'react-router-dom';
import { PaginaInicial } from './pages';
// import logo from './trivia.png';
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={PaginaInicial} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
