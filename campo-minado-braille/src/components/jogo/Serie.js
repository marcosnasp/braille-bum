import React, { useState } from "react";
import Letra from "./Letra";
import VideoAjuda from "../ajuda/VideoAjuda";
import SerieResultado from "./SerieResultado";
import Braillinho from "./Braillinho";

function Serie(props) {
  const [pontos, setPontos] = useState(0);
  const [progresso, setProgresso] = useState(0);
  const [vidas, setVidas] = useState([true, true, true]);
  const [cristais, setCristais] = useState([false, false, false]);

  const [exibePlayer, setExibePlayer] = useState(false);
  const img_lanterna = "image/lanterna.png";
  const [posicaoLetra, setPosicaoLetra] = useState(0);
  const [acertosSeguidos, setAcertosSeguidos] = useState(1);

  function exibirPlayer(exibePlayer) {
    if (exibePlayer) {
      setExibePlayer(false);
    } else {
      setExibePlayer(true);
    }
  }

  function alterarPontuacao(pontuacao) {
    if (pontos === 0 && pontuacao < 0) {
      return;
    }
    if (pontuacao > 0) {
      console.log("ADD ACERTO");
      adicionarAcerto();
    }
    setPontos(pontos + pontuacao);
  }

  function removerVida() {
    if (vidas[0] === true) {
      setVidas([false, true, true]);
      setAcertosSeguidos(1);
      return;
    } 
    if (vidas[1] === true) {
      setVidas([false, false, true]);
      setAcertosSeguidos(1);
      return;
    }
    if (vidas[2] === true) {
      setVidas([false, false, false]);
      setAcertosSeguidos(1);
      return;
    }   
  }

  // Incrementar acertos até o total de 3
  // assim, uma vida será recuperada.
  function adicionarAcerto() {
    if (acertosSeguidos === 3) {
      console.log("ADD CRISTAL");
      adicionarCristal();
      setAcertosSeguidos(1);
      return;
    }
    setAcertosSeguidos(acertosSeguidos + 1);
  }

  // Recuperar vida com o ganho de cristais
  function adicionarVida() {
    if (vidas[0] === false && vidas[1] === false && vidas[2] === true) {
      console.log("ADD VIDA 1");
      setVidas([false, true, true]);
      return;
    }
    if (vidas[0] === false && vidas[1] === true && vidas[2] === true) {
      console.log("ADD VIDA 2");
      setVidas([true, true, true]);
      return;
    }
  }

  function adicionarCristal() {
    console.log("CRISTAL 1");
    if (cristais[0] === false) {
      setCristais([true, false, false]);
      adicionarVida();
      setAcertosSeguidos(1);
      return;
    }
    console.log("CRISTAL 2");
    if (cristais[1] === false) {
      console.log("Cristal 2");
      setCristais([true, true, false]);
      adicionarVida();
      setAcertosSeguidos(1);
      return;
    }
    console.log("CRISTAL 3");
    if (cristais[2] === false) {
      console.log("Cristal 3");
      setCristais([true, true, true]);
      adicionarVida();
      setAcertosSeguidos(1);
      return;
    }
  }

  function proximaLetra() {
    setPosicaoLetra(posicaoLetra + 1);
  }

  return (
    <div>
      <SerieResultado
        cristais={cristais}
        pontos={pontos}
        progresso={progresso}
        vidas={vidas}
      />
      <div className="game">
        <div className="lanterna">
          <a href="#" onClick={() => exibirPlayer(exibePlayer)}>
            <img src={img_lanterna} alt="Animação com a ajuda" />
          </a>
        </div>
        {exibePlayer ? <VideoAjuda /> : ""}
        <Letra
          letra={props.config[posicaoLetra]}
          exibeResultado={props.config[posicaoLetra].exibeResultado}
          alterarPontuacao={alterarPontuacao}
          removerVida={removerVida}
          proximaLetra={proximaLetra}
        />
      </div>
    </div>
  );
}

export default Serie;
