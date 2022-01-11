import React from "react";
import config from "./Config";

import Jogo from "./components/jogo/Jogo";


function App() {
  const botao_config = "image/botao_menu.png";
  const botao_logo = "image/Logo-com-fundo.png";
  const botao_sair = "image/botao_sair_jogo.png";
  return (
      <div className="navbar">
        <div className="container flex">
          <h1 className="logo">
            <img src={botao_config} alt="Menu Config" />
          </h1>
          <div>
            <img src={botao_logo} alt="Braille Bum" className="logo" />
          </div>
          <div>
          <img src={botao_sair} alt="Sair" />
          </div>
        </div>
        <Jogo />
      </div>
  );
}

export default App;