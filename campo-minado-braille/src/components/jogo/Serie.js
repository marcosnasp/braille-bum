import React, { useState } from "react";
import Letra from "./Letra";
import VideoAjuda from "../ajuda/VideoAjuda";
import SerieResultado from "./SerieResultado";
import Braillinho from "./Braillinho";

function Serie(props) {
  const [pontos, setPontos] = useState(0);
  const [progresso, setProgresso] = useState(0);
  const [vidas, setVidas] = useState([true, true, true]);
  const [cristais, setCristais] = useState([true, true, true]);

  const [exibePlayer, setExibePlayer] = useState(false);
  const img_lanterna = "image/lanterna.png";

  function exibirPlayer(exibePlayer) {
    if (exibePlayer) {
      setExibePlayer(false);
    } else {
      setExibePlayer(true);
    }
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
          letra={props.config[0]}
          exibeResultado={props.config[0].exibeResultado}
        />
      </div>
    </div>
  );
}

export default Serie;
