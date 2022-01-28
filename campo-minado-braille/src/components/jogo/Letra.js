import React, { useState } from "react";
import Opcao from "./Opcao";
import Status from "./Status";
import ProximaLetra from "./ProximaLetra";
import OpcaoDesabilitada from "./OpcaoDesabilitada";

function Letra(props) {
  let [exibeResultado, setExibeResultado] = useState(false);

  let [botaoUm, setBotaoUm] = useState("image/botoes/1_botao.png");
  let [botaoDois, setBotaoDois] = useState("image/botoes/2_botao.png");
  let [botaoTres, setBotaoTres] = useState("image/botoes/3_botao.png");
  let [botaoQuatro, setBotaoQuatro] = useState("image/botoes/4_botao.png");
  let [botaoCinco, setBotaoCinco] = useState("image/botoes/5_botao.png");
  let [botaoSeis, setBotaoSeis] = useState("image/botoes/6_botao.png");

  let [statusBotaoUm, setStatusBotaoUm] = useState(false);
  let [statusBotaoDois, setStatusBotaoDois] = useState(false);
  let [statusBotaoTres, setStatusBotaoTres] = useState(false);
  let [statusBotaoQuatro, setStatusBotaoQuatro] = useState(false);
  let [statusBotaoCinco, setStatusBotaoCinco] = useState(false);
  let [statusBotaoSeis, setStatusBotaoSeis] = useState(false);

  let [checkAcerto, setCheckAcerto] = useState(false);
  let [checkErro, setCheckErro] = useState(false);
  let [exibeBraillinho, setExibeBraillinho] = useState(false);
  let [qtdeVerdadeiro, setQtdeVerdadeiro] = useState(1);
  let [disabled, setDisabled] = useState(false);

  const imagem_braillinho = "image/turminha/braillinho/12.png";

  const background_inicial_class = "float-container background-inicial";
  const background_acerto = "float-container background-acerto";
  const background_erro = "float-container background-erro";

  const background_acerto_letra_b = "float-container background-acerto-letra-b";
  const background_acerto_letra_c = "float-container background-acerto-letra-c";
  const background_acerto_letra_d = "float-container background-acerto-letra-d";
  const background_acerto_letra_e = "float-container background-acerto-letra-e";
  const background_acerto_letra_f = "float-container background-acerto-letra-f";
  const background_acerto_letra_g = "float-container background-acerto-letra-g";
  const background_acerto_letra_h = "float-container background-acerto-letra-h";
  const background_acerto_letra_i = "float-container background-acerto-letra-i";
  const background_acerto_letra_j = "float-container background-acerto-letra-j";

  const [background, setBackground] = useState(
    "float-container background-inicial"
  );

  const [classButton, setClassButton] = useState("button_game");

  const audio_acerto = document.getElementById("acerto_letra");
  const audio_bomba = document.getElementById("bomba");
  const audio_cristal = document.getElementById("cristal");
  const audio_bandeira = document.getElementById("bandeira");
  const audio_game_over = document.getElementById("game_over");
  const audio_obter_vida = document.getElementById("obter_vida");

  function desabilitarTodosOsBotoes(statusBotao) {
    setStatusBotaoUm(statusBotao);
    setStatusBotaoDois(statusBotao);
    setStatusBotaoTres(statusBotao);
    setStatusBotaoQuatro(statusBotao);
    setStatusBotaoCinco(statusBotao);
    setStatusBotaoSeis(statusBotao);
  }

  function checkDisabled() {
    if (
      statusBotaoUm &&
      statusBotaoDois &&
      statusBotaoTres &&
      statusBotaoQuatro &&
      statusBotaoCinco &&
      statusBotaoSeis
    ) {
      return true;
    }
    return false;
  }

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
    desabilitarTodosOsBotoes(false);
  }

  function explodirCampo(props, posicao) {
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
    desabilitarTodosOsBotoes(true);
    alterarPontuacao(props.debito_erro);
    audio_bomba.play();
  }

  function acertouLetraA(props) {
    setBotaoUm(bandeira);
    setBotaoDois(bomba);
    setBotaoTres(bomba);
    setBotaoQuatro(bomba);
    setBotaoCinco(bomba);
    setBotaoSeis(bomba);
    setBackground(background_acerto);
    setClassButton("button_game");
    setCheckAcerto(true);
    setCheckErro(false);
    desabilitarTodosOsBotoes(true);
    alterarPontuacao(props.pontuacao_acerto);
    audio_acerto.play();
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
    desabilitarTodosOsBotoes(true);
    audio_acerto.play();
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
    desabilitarTodosOsBotoes(true);
    audio_acerto.play();
  }

  function acertouLetraD(props) {
    setBotaoUm(bandeira);
    setBotaoDois(bomba);
    setBotaoTres(bomba);
    setBotaoQuatro(bandeira);
    setBotaoCinco(bandeira);
    setBotaoSeis(bomba);
    setBackground(background_acerto_letra_d);
    setCheckAcerto(true);
    setCheckErro(false);
    alterarPontuacao(props.pontuacao_acerto);
    desabilitarTodosOsBotoes(true);
    audio_acerto.play();
  }

  function acertouLetraE(props) {
    setBotaoUm(bandeira);
    setBotaoDois(bomba);
    setBotaoTres(bomba);
    setBotaoQuatro(bomba);
    setBotaoCinco(bandeira);
    setBotaoSeis(bomba);
    setBackground(background_acerto_letra_e);
    setCheckAcerto(true);
    setCheckErro(false);
    alterarPontuacao(props.pontuacao_acerto);
    desabilitarTodosOsBotoes(true);
    audio_acerto.play();
  }

  function acertouLetraF(props) {
    setBotaoUm(bandeira);
    setBotaoDois(bandeira);
    setBotaoTres(bomba);
    setBotaoQuatro(bandeira);
    setBotaoCinco(bomba);
    setBotaoSeis(bomba);
    setBackground(background_acerto_letra_f);
    setCheckAcerto(true);
    setCheckErro(false);
    alterarPontuacao(props.pontuacao_acerto);
    desabilitarTodosOsBotoes(true);
    audio_acerto.play();
  }

  function acertouLetraG(props) {
    setBotaoUm(bandeira);
    setBotaoDois(bandeira);
    setBotaoTres(bomba);
    setBotaoQuatro(bandeira);
    setBotaoCinco(bandeira);
    setBotaoSeis(bomba);
    setBackground(background_acerto_letra_g);
    setCheckAcerto(true);
    setCheckErro(false);
    alterarPontuacao(props.pontuacao_acerto);
    desabilitarTodosOsBotoes(true);
    audio_acerto.play();
  }

  function acertouLetraH(props) {
    setBotaoUm(bandeira);
    setBotaoDois(bandeira);
    setBotaoTres(bomba);
    setBotaoQuatro(bomba);
    setBotaoCinco(bandeira);
    setBotaoSeis(bomba);
    setBackground(background_acerto_letra_h);
    setCheckAcerto(true);
    setCheckErro(false);
    alterarPontuacao(props.pontuacao_acerto);
    desabilitarTodosOsBotoes(true);
    audio_acerto.play();
  }

  function acertouLetraI(props) {
    setBotaoUm(bomba);
    setBotaoDois(bandeira);
    setBotaoTres(bomba);
    setBotaoQuatro(bandeira);
    setBotaoCinco(bomba);
    setBotaoSeis(bomba);
    setBackground(background_acerto_letra_i);
    setCheckAcerto(true);
    setCheckErro(false);
    alterarPontuacao(props.pontuacao_acerto);
    desabilitarTodosOsBotoes(true);
    audio_acerto.play();
  }

  function acertouLetraJ(props) {
    setBotaoUm(bomba);
    setBotaoDois(bandeira);
    setBotaoTres(bomba);
    setBotaoQuatro(bandeira);
    setBotaoCinco(bandeira);
    setBotaoSeis(bomba);
    setBackground(background_acerto_letra_j);
    setCheckAcerto(true);
    setCheckErro(false);
    alterarPontuacao(props.pontuacao_acerto);
    desabilitarTodosOsBotoes(true);
    audio_acerto.play();
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

  const button_game_erro = "button_game_erro";

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
    setClassButton("button_game");
    inicializar();
    props.proximaLetra();
  }

  function incrementarVerdadeiro() {
    setQtdeVerdadeiro(qtdeVerdadeiro + 1);
  }

  function handleClick(props, pos) {
    if (checkDisabled() === true) {
      return;
    }
    if (props.letra === "a") {
      if (props.posicao[pos] === true) {
        acertouLetraA(props);
      } else {
        explodirCampo(props);
      }
    }
    if (props.letra === "b") {
      console.log("Acertou Letra B");
      console.log(props.letra);
      console.log(props.quantidade_verdadeiro);
      console.log(qtdeVerdadeiro);
      console.log("Status do botao 1: " + statusBotaoUm);
      if (qtdeVerdadeiro === props.quantidade_verdadeiro) {
        console.log("chamou acertou letra b");
        acertouLetraB(props);
      }
      if (props.posicao[pos] === true && pos === 1) {
        setBotaoUm(bandeira);
        setStatusBotaoUm(true);
        audio_bandeira.play();
        incrementarVerdadeiro();
      }
      if (props.posicao[pos] === true && pos === 2) {
        setBotaoDois(bandeira);
        setStatusBotaoDois(true);
        audio_bandeira.play();
        incrementarVerdadeiro();
      }
      if (props.posicao[pos] === false && pos === 3) {
        explodirCampo(props);
      }
      if (props.posicao[pos] === false && pos === 4) {
        explodirCampo(props);
      }
      if (props.posicao[pos] === false && pos === 5) {
        explodirCampo(props);
      }
      if (props.posicao[pos] === false && pos === 6) {
        explodirCampo(props);
      }
    }
    // Requisitos...
    // Acrescentar o cristal após 3 acertos consecutivos
    // Se tiver perdido, ele recupera uma vida
    if (props.letra === "c") {
      console.log("Acertou Letra C");
      console.log(props.letra);
      console.log(props.quantidade_verdadeiro);
      console.log(qtdeVerdadeiro);
      if (qtdeVerdadeiro === props.quantidade_verdadeiro) {
        console.log("chamou acertou letra c");
        acertouLetraC(props);
      }
      if (props.posicao[pos] === true && pos === 1) {
        setBotaoUm(bandeira);
        setStatusBotaoUm(true);
        audio_bandeira.play();
        incrementarVerdadeiro();
      }
      if (props.posicao[pos] === false && pos === 2) {
        explodirCampo(props);
      }
      if (props.posicao[pos] === false && pos === 3) {
        explodirCampo(props);
      }
      if (props.posicao[pos] === true && pos === 4) {
        setBotaoQuatro(bandeira);
        setStatusBotaoQuatro(true);
        audio_bandeira.play();
        incrementarVerdadeiro();
      }
      if (props.posicao[pos] === false && pos === 5) {
        explodirCampo(props);
      }
      if (props.posicao[pos] === false && pos === 6) {
        explodirCampo(props);
      }
    }

    if (props.letra === "d") {
      console.log("Acertou Letra D");
      console.log(props.letra);
      console.log(props.quantidade_verdadeiro);
      console.log(qtdeVerdadeiro);
      if (qtdeVerdadeiro === props.quantidade_verdadeiro) {
        acertouLetraD(props);
      }
      if (props.posicao[pos] === true && pos === 1) {
        setBotaoUm(bandeira);
        setStatusBotaoUm(true);
        audio_bandeira.play();
        incrementarVerdadeiro();
      }
      if (props.posicao[pos] === false && pos === 2) {
        explodirCampo(props);
      }
      if (props.posicao[pos] === false && pos === 3) {
        explodirCampo(props);
      }
      if (props.posicao[pos] === true && pos === 4) {
        setBotaoQuatro(bandeira);
        setStatusBotaoQuatro(true);
        audio_bandeira.play();
        incrementarVerdadeiro();
      }
      if (props.posicao[pos] === true && pos === 5) {
        setBotaoCinco(bandeira);
        setStatusBotaoCinco(true);
        audio_bandeira.play();
        incrementarVerdadeiro();
      }
      if (props.posicao[pos] === false && pos === 6) {
        explodirCampo(props);
      }
    }

    if (props.letra === "e") {
      console.log("Acertou Letra E");
      console.log(props.letra);
      console.log(props.quantidade_verdadeiro);
      console.log(qtdeVerdadeiro);
      if (qtdeVerdadeiro === props.quantidade_verdadeiro) {
        acertouLetraE(props);
      }
      if (props.posicao[pos] === true && pos === 1) {
        setBotaoUm(bandeira);
        setStatusBotaoUm(true);
        audio_bandeira.play();
        incrementarVerdadeiro();
      }
      if (props.posicao[pos] === false && pos === 2) {
        explodirCampo(props);
      }
      if (props.posicao[pos] === false && pos === 3) {
        explodirCampo(props);
      }
      if (props.posicao[pos] === false && pos === 4) {
        explodirCampo(props);
      }
      if (props.posicao[pos] === true && pos === 5) {
        setBotaoCinco(bandeira);
        setStatusBotaoCinco(true);
        audio_bandeira.play();
        incrementarVerdadeiro();
      }
      if (props.posicao[pos] === false && pos === 6) {
        explodirCampo(props);
      }
    }

    if (props.letra === "f") {
      console.log("Acertou Letra F");
      console.log(props.letra);
      console.log(props.quantidade_verdadeiro);
      console.log(qtdeVerdadeiro);
      if (qtdeVerdadeiro === props.quantidade_verdadeiro) {
        acertouLetraF(props);
      }
      if (props.posicao[pos] === true && pos === 1) {
        setBotaoUm(bandeira);
        setStatusBotaoUm(true);
        audio_bandeira.play();
        incrementarVerdadeiro();
      }
      if (props.posicao[pos] === true && pos === 2) {
        setBotaoDois(bandeira);
        setStatusBotaoDois(true);
        audio_bandeira.play();
        incrementarVerdadeiro();
      }
      if (props.posicao[pos] === false && pos === 3) {
        explodirCampo(props);
      }
      if (props.posicao[pos] === true && pos === 4) {
        setBotaoQuatro(bandeira);
        setStatusBotaoQuatro(true);
        audio_bandeira.play();
        incrementarVerdadeiro();
      }
      if (props.posicao[pos] === false && pos === 5) {
        explodirCampo(props);
      }
      if (props.posicao[pos] === false && pos === 6) {
        explodirCampo(props);
      }
    }

    if (props.letra === "g") {
      console.log("Acertou Letra G");
      console.log(props.letra);
      console.log(props.quantidade_verdadeiro);
      console.log(qtdeVerdadeiro);
      if (qtdeVerdadeiro === props.quantidade_verdadeiro) {
        acertouLetraG(props);
      }
      if (props.posicao[pos] === true && pos === 1) {
        setBotaoUm(bandeira);
        setStatusBotaoUm(true);
        audio_bandeira.play();
        incrementarVerdadeiro();
      }
      if (props.posicao[pos] === true && pos === 2) {
        setBotaoDois(bandeira);
        setStatusBotaoDois(true);
        audio_bandeira.play();
        incrementarVerdadeiro();
      }
      if (props.posicao[pos] === false && pos === 3) {
        explodirCampo(props);
      }
      if (props.posicao[pos] === true && pos === 4) {
        setBotaoQuatro(bandeira);
        setStatusBotaoQuatro(true);
        audio_bandeira.play();
        incrementarVerdadeiro();
      }
      if (props.posicao[pos] === true && pos === 5) {
        setBotaoCinco(bandeira);
        setStatusBotaoCinco(true);
        audio_bandeira.play();
        incrementarVerdadeiro();
      }
      if (props.posicao[pos] === false && pos === 6) {
        explodirCampo(props);
      }
    }

    if (props.letra === "h") {
      console.log("Acertou Letra H");
      console.log(props.letra);
      console.log(props.quantidade_verdadeiro);
      console.log(qtdeVerdadeiro);
      if (qtdeVerdadeiro === props.quantidade_verdadeiro) {
        acertouLetraH(props);
      }
      if (props.posicao[pos] === true && pos === 1) {
        setBotaoUm(bandeira);
        setStatusBotaoUm(true);
        audio_bandeira.play();
        incrementarVerdadeiro();
      }
      if (props.posicao[pos] === true && pos === 2) {
        setBotaoDois(bandeira);
        setStatusBotaoDois(true);
        audio_bandeira.play();
        incrementarVerdadeiro();
      }
      if (props.posicao[pos] === false && pos === 3) {
        explodirCampo(props);
      }
      if (props.posicao[pos] === false && pos === 4) {
        explodirCampo(props);
      }
      if (props.posicao[pos] === true && pos === 5) {
        setBotaoCinco(bandeira);
        setStatusBotaoCinco(true);
        audio_bandeira.play();
        incrementarVerdadeiro();
      }
      if (props.posicao[pos] === false && pos === 6) {
        explodirCampo(props);
      }
    }

    if (props.letra === "i") {
      console.log("Acertou Letra I");
      console.log(props.letra);
      console.log(props.quantidade_verdadeiro);
      console.log(qtdeVerdadeiro);
      if (qtdeVerdadeiro === props.quantidade_verdadeiro) {
        acertouLetraI(props);
      }
      if (props.posicao[pos] === false && pos === 1) {
        explodirCampo(props);
      }
      if (props.posicao[pos] === true && pos === 2) {
        setBotaoDois(bandeira);
        setStatusBotaoDois(true);
        audio_bandeira.play();
        incrementarVerdadeiro();
      }
      if (props.posicao[pos] === false && pos === 3) {
        explodirCampo(props);
      }
      if (props.posicao[pos] === true && pos === 4) {
        setBotaoQuatro(bandeira);
        setStatusBotaoQuatro(true);
        audio_bandeira.play();
        incrementarVerdadeiro();
      }
      if (props.posicao[pos] === false && pos === 5) {
        explodirCampo(props);
      }
      if (props.posicao[pos] === false && pos === 6) {
        explodirCampo(props);
      }
    }

    if (props.letra === "j") {
      console.log("Acertou Letra J");
      console.log(props.letra);
      console.log(props.quantidade_verdadeiro);
      console.log(qtdeVerdadeiro);
      if (qtdeVerdadeiro === props.quantidade_verdadeiro) {
        acertouLetraJ(props);
      }
      if (props.posicao[pos] === false && pos === 1) {
        explodirCampo(props);
      }
      if (props.posicao[pos] === true && pos === 2) {
        setBotaoDois(bandeira);
        setStatusBotaoDois(true);
        audio_bandeira.play();
        incrementarVerdadeiro();
      }
      if (props.posicao[pos] === false && pos === 3) {
        explodirCampo(props);
      }
      if (props.posicao[pos] === true && pos === 4) {
        setBotaoQuatro(bandeira);
        setStatusBotaoQuatro(true);
        audio_bandeira.play();
        incrementarVerdadeiro();
      }
      if (props.posicao[pos] === true && pos === 5) {
        setBotaoCinco(bandeira);
        setStatusBotaoCinco(true);
        audio_bandeira.play();
        incrementarVerdadeiro();
      }
      if (props.posicao[pos] === false && pos === 6) {
        explodirCampo(props);
      }
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
              {statusBotaoUm === true ? (
                <OpcaoDesabilitada
                  image={botaoUm}
                  classButton={classButton}
                  alt={texto_alt}
                />
              ) : (
                <Opcao
                  image={botaoUm}
                  classButton={classButton}
                  alt={texto_alt}
                  disabled={statusBotaoUm}
                  onClick={() => handleClick(props.letra, 1)}
                />
              )}
              {statusBotaoQuatro ? (
                <OpcaoDesabilitada
                  image={botaoQuatro}
                  classButton={classButton}
                  alt={texto_alt}
                />
              ) : (
                <Opcao
                  image={botaoQuatro}
                  classButton={classButton}
                  alt={texto_alt}
                  disabled={statusBotaoQuatro}
                  onClick={() => handleClick(props.letra, 4)}
                />
              )}
            </div>
            <div id="caixa_linha">
              {statusBotaoDois ? (
                <OpcaoDesabilitada
                  image={botaoDois}
                  classButton={classButton}
                  alt={texto_alt}
                />
              ) : (
                <Opcao
                  image={botaoDois}
                  classButton={classButton}
                  alt={texto_alt}
                  disabled={statusBotaoDois}
                  onClick={() => handleClick(props.letra, 2)}
                />
              )}
              {statusBotaoCinco ? (
                <OpcaoDesabilitada
                  image={botaoCinco}
                  classButton={classButton}
                  alt={texto_alt}
                />
              ) : (
                <Opcao
                  image={botaoCinco}
                  classButton={classButton}
                  alt={texto_alt}
                  disabled={statusBotaoCinco}
                  onClick={() => handleClick(props.letra, 5)}
                />
              )}
            </div>
            <div id="caixa_linha">
              {statusBotaoTres ? (
                <OpcaoDesabilitada
                  image={botaoTres}
                  classButton={classButton}
                  alt={texto_alt}
                />
              ) : (
                <Opcao
                  image={botaoTres}
                  classButton={classButton}
                  alt={texto_alt}
                  disabled={statusBotaoTres}
                  onClick={() => handleClick(props.letra, 3)}
                />
              )}
              {statusBotaoSeis ? (
                <OpcaoDesabilitada
                  image={botaoSeis}
                  classButton={classButton}
                  alt={texto_alt}
                />
              ) : (
                <Opcao
                  image={botaoSeis}
                  classButton={classButton}
                  alt={texto_alt}
                  disabled={statusBotaoSeis}
                  onClick={() => handleClick(props.letra, 6)}
                />
              )}
            </div>
            {checkAcerto ? (
              <div className="img-check">
                <div>
                  <Status imageSrc={imagem_correto} />
                </div>
                <div>
                  <ProximaLetra
                    imageSrc={image_proxima_letra}
                    proximaLetra={() => proximaLetra()}
                  />
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
                <div>
                  <ProximaLetra
                    imageSrc={image_proxima_letra}
                    proximaLetra={() => proximaLetra()}
                  />
                </div>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Letra;
