import React from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import Projects from './Projects'
import About from './About';
import Contact from './Contact'
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div>
        <header>
          <nav>
            <ul>
              <li><Link to="/">Início</Link></li>
              <li><Link to="/projects">Projetos</Link></li>
              <li><Link to="/contact">Contato</Link></li>
              <li><Link to="/about">Sobre</Link></li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route exact path="/"><div>Meu Portfólio</div></Route>
          <Route path="/projects" component={Projects} />
          <Route path="/contact" component={Contact}/>
          <Route path="/about" component={About} />
          <Route>
            <div>
              <p>Desculpe, página não encontrada. [Error: 404]</p>
            </div>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
