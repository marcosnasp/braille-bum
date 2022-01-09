import React from "react";
import config from "./Config";

import Sobre from "./pages/Sobre";
import Usuario from "./pages/Usuario";
import Jogo from "./components/jogo/Jogo";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  Redirect,
  Navigate,
} from "react-router-dom";

function App() {
  const botao_config = "image/botao_menu.png";
  const botao_logo = "image/Logo-com-fundo.png";
  const botao_sair = "image/botao_sair_jogo.png";
  return (
    <Router>
      <div className="navbar">
        <div className="container flex">
          <h1 className="logo">
            <img src={botao_config} alt="Menu Config" />
          </h1>
          <div>
            <img src={botao_logo} alt="Braille Bum" className="logo" />
          </div>
          <nav>
            <ul>
              <li>
                <Link to="/">Sobre</Link>
              </li>
              <li>
                <Link to="/usuario">Usuario</Link>
              </li>
              <li>
                <Link to="/jogo">Jogo</Link>
              </li>
            </ul>
          </nav>
        </div>
        <Routes>
          <Route path="/" element={<Sobre />} />
          <Route path="/usuario" element={<Usuario />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/jogo" element={<Navigate to="/jogo2" replace />} />
          <Route path="/jogo2" element={<Jogo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;