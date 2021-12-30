import React, { useState } from "react";
import Letra from "./Letra";
import SerieResultado from "./SerieResultado";

function Serie(props) {
  const [pontos, setPontos] = useState(0);
  const [progresso, setProgresso] = useState(0);
  const [vidas, setVidas] = useState([true, true, true]);
  const [cristais, setCristais] = useState([true, true, true]);

  return (
    <div>
      <SerieResultado cristais={cristais} pontos={pontos} progresso={progresso} vidas={vidas} />
      <div className="float-container">
        <div className="letra">
          <Letra letra={props.config[0]} />
        </div>
      </div>
    </div>
  );
}

export default Serie;
