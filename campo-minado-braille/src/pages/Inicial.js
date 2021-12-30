import React from "react";

function Inicial() {
  const image_bomba = "image/mina.png";
  const image_conquista = "image/bandeira.png";
  const image_a = "image/a.png";

  return (
    <div>
      <div>
        <button id="opcao_4" type="submit">
          <img src="image/botao_menu.png" alt="Botao Menu" />
        </button>
      </div>
      <div>
        <button id="opcao_4" type="submit">
          <img src="image/botao_sair_jogo.png" alt="Botao Sair" />
        </button>
      </div>
      <div>
      <div>
        <button id="opcao_4" type="submit">
          <img src="image/botao_extras_menu.png" alt="Botao Menu" />
        </button>
      </div>
      <div>
        <button id="opcao_4" type="submit">
          <img src="image/botao_sair_jogo.png" alt="Botao Sair" />
        </button>
      </div>
      </div>
    </div>
  );
}

export default Inicial;
