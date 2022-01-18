import React, { useState } from "react";
import Braillinho from "./Braillinho";
import LetraResultado from "./Letra";
import LetraImagem from "./LetraImagem";
import Opcao from "./Opcao";
import Status from "./Status";
import ProximaLetra from "./ProximaLetra";

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

  const [classButton, setClassButton] = useState("button_game");

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
  const image_fogo_erro = "image/botoes/fogo_sem_numero.png";
  const image_proxima_letra = "image/botoes/botao_proximo.png";

  console.log(props.letra);

  function alterarPontuacao() {
    props.alterarPontuacao();
  }

  function removerVida() {
    props.removerVida();
  }

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
        setClassButton("button_game");
        console.log(props);
        console.log(alterarPontuacao);
        alterarPontuacao();
      } else {
        console.log("Você Errou, clicando na posição: %d", pos);
        console.log(props.letra);
        setBotaoUm(image_fogo_erro);
        setBotaoDois(image_fogo_erro);
        setBotaoTres(image_fogo_erro);
        setBotaoQuatro(image_fogo_erro);
        setBotaoCinco(image_fogo_erro);
        setBotaoSeis(image_fogo_erro);
        setCheckAcerto(false);
        setCheckErro(true);
        setBackground(background_erro);
        setClassButton("button_game_erro");
        removerVida();
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
      <div className="placa">
        <div id="placa-bomba">1</div>
        <div id="placa-letra">a</div>
        <div id="placa-bandeira">3</div>
      </div>
      <div className="letra">
        <div className="espaco_letras">
          <div id="caixa_campo">
            <div id="caixa_linha">
              <Opcao
                image={botaoUm}
                classButton={classButton}
                alt={texto_alt}
                onClick={() => handleClick(props.letra, 1)}
              />
              <Opcao
                image={botaoQuatro}
                classButton={classButton}
                alt={texto_alt}
                onClick={() => handleClick(props.letra, 4)}
              />
            </div>
            <div id="caixa_linha">
              <Opcao
                image={botaoDois}
                classButton={classButton}
                alt={texto_alt}
                onClick={() => handleClick(props.letra, 2)}
              />
              <Opcao
                image={botaoCinco}
                classButton={classButton}
                alt={texto_alt}
                onClick={() => handleClick(props.letra, 5)}
              />
            </div>
            <div id="caixa_linha">
              <Opcao
                image={botaoTres}
                classButton={classButton}
                alt={texto_alt}
                onClick={() => handleClick(props.letra, 3)}
              />
              <Opcao
                image={botaoSeis}
                classButton={classButton}
                alt={texto_alt}
                onClick={() => handleClick(props.letra, 6)}
              />
            </div>
            {true ? (
              <div className="img-check">
                <div>
                  <Status imageSrc={imagem_correto} /> 
                </div>
                <div>
                  <ProximaLetra imageSrc={image_proxima_letra} />
                </div>
              </div>
            ) : (
              ""
            )}
            {checkErro ? (
              <div className="img-check">
                <Status imageSrc={imagem_erro} />
                <ProximaLetra imageSrc={image_proxima_letra} />
              </div>
            ) : (
              ""
            )}
            

            {/* {exibeBraillinho ? <Braillinho imageSrc={imagem_braillinho} /> : "" } */}
            {/* {checkAcertou(props)} */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Letra;
