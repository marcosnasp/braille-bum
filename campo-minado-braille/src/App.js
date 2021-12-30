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
  return (
    <Router>
      <div className="navbar">
        <div className="container flex">
          <h1 className="logo">Braille Bum</h1>
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