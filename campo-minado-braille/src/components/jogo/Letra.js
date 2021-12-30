import React, { useState } from "react";
import LetraResultado from "./LetraResultado";
import Opcao from "./Opcao";

function handleClick() {
  console.log("Clicou no botão");
}

function Letra(props) {

  const label_buttons = {
    botao_1: "image/botoes/botao_1.png",
    botao_2: "image/botoes/botao_2.png",
    botao_3: "image/botoes/botao_3.png",
    botao_4: "image/botoes/botao_4.png",
    botao_5: "image/botoes/botao_5.png",
    botao_6: "image/botoes/botao_6.png",
  };

  const image_fogo = "image/fogo.png";
  const texto_alt = "Botão";

  console.log(props.letra);

  return (
    <div className="espaco_letras">
      <LetraResultado letras={props.letra} />
      <div id="caixa_campo">
        <div id="caixa_linha">
          <Opcao
            image={label_buttons.botao_1}
            alt={texto_alt}
            onClick={() => handleClick()}
          />
          <Opcao
            image={label_buttons.botao_4}
            alt={texto_alt}
            onClick={() => handleClick()}
          />
        </div>
        <div id="caixa_linha">
          <Opcao
            image={label_buttons.botao_2}
            alt={texto_alt}
            onClick={() => handleClick()}
          />
          <Opcao
            image={label_buttons.botao_5}
            alt={texto_alt}
            onClick={() => handleClick()}
          />
        </div>
        <div id="caixa_linha">
          <Opcao
            image={label_buttons.botao_3}
            alt={texto_alt}
            onClick={() => handleClick()}
          />
          <Opcao
            image={label_buttons.botao_6}
            alt={texto_alt}
            onClick={() => handleClick()}
          />
        </div>
      </div>
    </div>
  );
}

export default Letra;
