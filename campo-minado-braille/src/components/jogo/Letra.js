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
  let [qtdeVerdadeiro, setQtdeVerdadeiro] = useState(1);

  const imagem_braillinho = "image/turminha/braillinho/12.png";

  const background_inicial_class = "float-container background-inicial";
  const background_acerto = "float-container background-acerto";
  const background_erro = "float-container background-erro";

  const background_acerto_letra_b = "float-container background-acerto-letra-b";
  const background_acerto_letra_c = "float-container background-acerto-letra-c";

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
    setCheckAcerto(false);
    setCheckErro(false);
    setQtdeVerdadeiro(1);
  }

  function explodirCampo() {
    setBotaoUm(image_fogo_erro);
    setBotaoDois(image_fogo_erro);
    setBotaoTres(image_fogo_erro);
    setBotaoQuatro(image_fogo_erro);
    setBotaoCinco(image_fogo_erro);
    setBotaoSeis(image_fogo_erro);
    setBackground(background_erro);
    setClassButton(button_game_erro);
    setCheckErro(true);
    setCheckAcerto(false);
    removerVida();
  }

  function acertouLetraB(props) {
    setBotaoUm(bandeira);
    setBotaoDois(bandeira);
    setBotaoTres(bomba);
    setBotaoQuatro(bomba);
    setBotaoCinco(bomba);
    setBotaoSeis(bomba);
    setBackground(background_acerto_letra_b);
    setCheckAcerto(true);
    setCheckErro(false);
    alterarPontuacao(props.pontuacao_acerto);
  }

  function acertouLetraC(props) {
    setBotaoUm(bandeira);
    setBotaoDois(bomba);
    setBotaoTres(bomba);
    setBotaoQuatro(bandeira);
    setBotaoCinco(bomba);
    setBotaoSeis(bomba);
    setBackground(background_acerto_letra_c);
    setCheckAcerto(true);
    setCheckErro(false);
    alterarPontuacao(props.pontuacao_acerto);
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

  const button_game_erro = "button_game_erro"

  console.log(props.letra);

  function alterarPontuacao(pontuacao) {
    props.alterarPontuacao(pontuacao);
  }

  function removerVida() {
    props.removerVida();
  }

  // realizar a checagem do numero de vidas, 
  // em caso de erro, remover a imagem da vida até o limite de 3
  // caso tenham se acabado as vidas, game over..
  function proximaLetra() {
    console.log("chamou");
    setBackground(background_inicial_class);
    inicializar();
    props.proximaLetra();
  }

  function incrementarVerdadeiro() {
    setQtdeVerdadeiro(qtdeVerdadeiro + 1);
  }

  function handleClick(props, pos) {
    if (props.letra === "a") {
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
        alterarPontuacao(props.pontuacao_acerto);
      } else {
        console.log("Você Errou, clicando na posição: %d", pos);
        console.log(props.letra);
        explodirCampo();
      }
    }
    if (props.letra === 'b') {
      console.log("Acertou Letra B");
      console.log(props.letra);
      console.log(props.quantidade_verdadeiro);
      console.log(qtdeVerdadeiro);
      if (qtdeVerdadeiro === props.quantidade_verdadeiro) {
        console.log("chamou acertou letra b");
        acertouLetraB(props);
      }
      if (props.posicao[pos] === true && pos === 1) {
        setBotaoUm(bandeira);
        incrementarVerdadeiro();
      }
      if (props.posicao[pos] === true && pos === 2) {
        setBotaoDois(bandeira);
        incrementarVerdadeiro();
      }
      if (props.posicao[pos] === false && pos === 3) {
        explodirCampo();
      }
      if (props.posicao[pos] === false && pos === 4) {
        explodirCampo();
      }
      if (props.posicao[pos] === false && pos === 5) {
        explodirCampo();
      }
      if (props.posicao[pos] === false && pos === 6) {
        explodirCampo();
      }
    }
    // Requisitos...
    // Acrescentar o cristal após 3 acertos consecutivos
    // Se tiver perdido, ele recupera uma vida
    if (props.letra === 'c') {
      console.log("Acertou Letra C");
      console.log(props.letra);
      console.log(props.quantidade_verdadeiro);
      console.log(qtdeVerdadeiro);
      if (qtdeVerdadeiro === props.quantidade_verdadeiro) {
        console.log("chamou acertou letra b");
        acertouLetraC(props);
      }
      if (props.posicao[pos] === true && pos === 1) {
        setBotaoUm(bandeira);
        incrementarVerdadeiro();
      }
      if (props.posicao[pos] === true && pos === 2) {
        explodirCampo();
      }
      if (props.posicao[pos] === false && pos === 3) {
        explodirCampo();
      }
      if (props.posicao[pos] === false && pos === 4) {
        setBotaoQuatro(bandeira);
        incrementarVerdadeiro();
      }
      if (props.posicao[pos] === false && pos === 5) {
        explodirCampo();
      }
      if (props.posicao[pos] === false && pos === 6) {
        explodirCampo();
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
        <div id="placa-bomba">{props.letra.bombas}</div>
        <div id="placa-letra">{props.letra.letra}</div>
        <div id="placa-bandeira">{props.letra.bandeiras}</div>
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
            {checkAcerto ? (
              <div className="img-check">
                <div>
                  <Status imageSrc={imagem_correto} />
                </div>
                <div>
                  <ProximaLetra imageSrc={image_proxima_letra} proximaLetra={() => proximaLetra()} />
                </div>
              </div>
            ) : (
              ""
            )}
            {checkErro ? (
              <div className="img-check">
                <div>
                  <Status imageSrc={imagem_erro} />
                </div>
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
