import React, { useState } from "react";
import LetraResultado from "./Letra";
import LetraImagem from "./LetraImagem";
import Opcao from "./Opcao";

function handleClick(props, pos) {
  if (props.letra == 'A') {
    console.log(props.letra);
    console.log(pos);
    console.log("Clicou no botão");
    //this.exibeResultado = true;
    //checkAcertou();
  }
}

function checkAcertou(props) {
  if (props.letra.exibeResultado == true) {
    return <LetraImagem letra="image/letras/letra_a.png" />
  } else {
    return "<></>";
  }
}

function Letra(props) {
  let [exibeResultado, setExibeResultado] = useState(false);

  const label_buttons = {
    botao_1: "image/botoes/1_botao.png",
    botao_2: "image/botoes/2_botao.png",
    botao_3: "image/botoes/3_botao.png",
    botao_4: "image/botoes/4_botao.png",
    botao_5: "image/botoes/5_botao.png",
    botao_6: "image/botoes/6_botao.png",
  };

  const image_fogo = "image/fogo.png";
  const image_a = "image/letras/letra_a.png";
  const texto_alt = "Botão";

  console.log(props.letra);

  return (
    <div className="espaco_letras">
      {/* <LetraResultado letras={props.letra} /> */}
      <div id="caixa_campo">
        <div id="caixa_linha">
          <Opcao
            image={label_buttons.botao_1}
            alt={texto_alt}
            onClick={() => handleClick(props.letra, 1)}
          />
          <Opcao
            image={label_buttons.botao_4}
            alt={texto_alt}
            onClick={() => handleClick(props.letra, 4)}
          />
        </div>
        <div id="caixa_linha">
          <Opcao
            image={label_buttons.botao_2}
            alt={texto_alt}
            onClick={() => handleClick(props.letra, 2)}
          />
          <Opcao
            image={label_buttons.botao_5}
            alt={texto_alt}
            onClick={() => handleClick(props.letra, 5)}
          />
        </div>
        <div id="caixa_linha">
          <Opcao
            image={label_buttons.botao_3}
            alt={texto_alt}
            onClick={() => handleClick(props.letra, 3)}
          />
          <Opcao
            image={label_buttons.botao_6}
            alt={texto_alt}
            onClick={() => handleClick(props.letra, 6)}
          />
        </div>
      </div>
    </div>
  );
}

export default Letra;
