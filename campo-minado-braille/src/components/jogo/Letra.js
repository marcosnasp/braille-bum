import React, { useState } from "react";
import Braillinho from "./Braillinho";
import LetraResultado from "./Letra";
import LetraImagem from "./LetraImagem";
import Opcao from "./Opcao";
import Status from "./Status";

function Letra(props) {
  let [exibeResultado, setExibeResultado] = useState(false);

  let [botaoUm, setBotaoUm] = useState("image/botoes/1_botao.png");
  let [botaoDois, setBotaoDois] = useState("image/botoes/2_botao.png");
  let [botaoTres, setBotaoTres] = useState("image/botoes/3_botao.png");
  let [botaoQuatro, setBotaoQuatro] = useState("image/botoes/4_botao.png");
  let [botaoCinco, setBotaoCinco] = useState("image/botoes/5_botao.png");
  let [botaoSeis, setBotaoSeis] = useState("image/botoes/6_botao.png");

  let [checkAcerto, setCheckAcerto] = useState(false);
  let [checkErro, setCheckErro] = useState(false);
  let [exibeBraillinho, setExibeBraillinho] = useState(false);

  const imagem_braillinho = "image/turminha/braillinho/12.png";

  const background_inicial_class = "float-container background-inicial";
  const background_acerto = "float-container background-acerto";
  const background_erro = "float-container background-erro";

  const [background, setBackground] = useState(
    "float-container background-inicial"
  );

  function inicializar() {
    setBotaoUm(label_buttons.botao_1);
    setBotaoDois(label_buttons.botao_2);
    setBotaoTres(label_buttons.botao_3);
    setBotaoQuatro(label_buttons.botao_4);
    setBotaoCinco(label_buttons.botao_5);
    setBotaoSeis(label_buttons.botao_6);
  }

  const label_buttons = {
    botao_1: "image/botoes/1_botao.png",
    botao_2: "image/botoes/2_botao.png",
    botao_3: "image/botoes/3_botao.png",
    botao_4: "image/botoes/4_botao.png",
    botao_5: "image/botoes/5_botao.png",
    botao_6: "image/botoes/6_botao.png",
  };

  const image_fogo = "image/fogo.png";
  const bandeira = "image/botoes/bandeira_com_relevo.png";
  const bomba = "image/botoes/bomba_acerto.png";
  const image_a = "image/letras/letra_a.png";
  const texto_alt = "Botão";
  const imagem_correto = "image/acerto_peq.png";
  const imagem_erro = "image/erro.png";

  console.log(props.letra);

  function handleClick(props, pos) {
    if (props.letra === "A") {
      if (props.posicao[pos] === true) {
        console.log("Acertou");
        console.log(props.letra);
        console.log(pos);
        setExibeResultado(true);
        setBotaoUm(bandeira);
        setBotaoDois(bomba);
        setBotaoTres(bomba);
        setBotaoQuatro(bomba);
        setBotaoCinco(bomba);
        setBotaoSeis(bomba);
        checkAcertou(props);
        setCheckAcerto(true);
        setCheckErro(false);
        setExibeBraillinho(true);
        console.log(props);
        setBackground(background_acerto);
      } else {
        console.log("Você Errou, clicando na posição: %d", pos);
        console.log(props.letra);
        setBotaoUm(bomba);
        setBotaoDois(bomba);
        setBotaoTres(bomba);
        setBotaoQuatro(bomba);
        setBotaoCinco(bomba);
        setBotaoSeis(bomba);
        setCheckAcerto(false);
        setCheckErro(true);
        setBackground(background_erro);
      }
    }
  }

  function exibirBraillinho() {}

  function checkAcertou(props) {
    if (exibeResultado === true) {
      console.log("exibe imagem");
      return <LetraImagem letra={image_a} />;
    }
  }

  return (
    <div className={background}>
      <div className="letra">
        <div className="espaco_letras">
          <div id="caixa_campo">
            <div id="caixa_linha">
              <Opcao
                image={botaoUm}
                alt={texto_alt}
                onClick={() => handleClick(props.letra, 1)}
              />
              <Opcao
                image={botaoQuatro}
                alt={texto_alt}
                onClick={() => handleClick(props.letra, 4)}
              />
            </div>
            <div id="caixa_linha">
              <Opcao
                image={botaoDois}
                alt={texto_alt}
                onClick={() => handleClick(props.letra, 2)}
              />
              <Opcao
                image={botaoCinco}
                alt={texto_alt}
                onClick={() => handleClick(props.letra, 5)}
              />
            </div>
            <div id="caixa_linha">
              <Opcao
                image={botaoTres}
                alt={texto_alt}
                onClick={() => handleClick(props.letra, 3)}
              />
              <Opcao
                image={botaoSeis}
                alt={texto_alt}
                onClick={() => handleClick(props.letra, 6)}
              />
            </div>
            {checkAcerto ? <Status imageSrc={imagem_correto} /> : ""}
            {checkErro ? <Status imageSrc={imagem_erro} /> : ""}
            {/* {exibeBraillinho ? <Braillinho imageSrc={imagem_braillinho} /> : "" } */}
            {/* {checkAcertou(props)} */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Letra;
