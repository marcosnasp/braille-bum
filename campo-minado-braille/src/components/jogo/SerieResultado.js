import React from "react";
import Timer from "../temporizador/Timer";
import Vida from "./Vida";

function SerieResultado(props) {

  const images_cristais = {
    cristal_um: "image/cristal_azul.png",
    cristal_dois: "image/cristal_rosa.png",
    cristal_tres: "image/cristal_verde.png",
    cristal_desativado: "image/cristal_desativado.png",
    cristal_inativo: "image/cristal_inativo.png"
  };

  const images_vidas = {
    vida_ativa: "image/vida_preenchida.png",
    vida_desativada: "image/vida_perdida.png",
  };

  console.log(props.cristais);
  console.log(props.vidas);
  console.log(props.pontos);
  console.log(props.progresso);
  console.log(images_vidas);
  console.log(images_cristais);

  const class_name_icones = "img_dicas";

  return (
    <div className="scores">
      <div className="container flex">
        <div className="item_score">
          <span>Cristais</span>
          <div id="cristais">
            <span>
              <img src={images_cristais.cristal_inativo} alt="Cristal Um" />
              <img src={images_cristais.cristal_inativo} alt="Cristal Dois" />
              <img src={images_cristais.cristal_inativo} alt="Cristal Tres" />
            </span>
          </div>
        </div>

        <div className="item_score">
          <span>Pontos</span>
          <div>
            <input type="text" value={props.pontos} />
          </div>
        </div>

        <div className="item_score">
          <span>Progresso</span>
          <div>
            <input type="text" value={props.progresso} />
          </div>
        </div>

        <div className="item_score">
          <span>Vidas</span>
          <div id="vidas">
            <span>
              {props.vidas[0] ? <Vida imageSrc={images_vidas.vida_ativa} txtAlt='Vida Ativa' /> : <Vida imageSrc={images_vidas.vida_desativada} txtAlt='Vida Perdida' /> }
              {props.vidas[1] ? <Vida imageSrc={images_vidas.vida_ativa} txtAlt='Vida Ativa' /> : <Vida imageSrc={images_vidas.vida_desativada} txtAlt='Vida Perdida' /> }
              {props.vidas[2] ? <Vida imageSrc={images_vidas.vida_ativa} txtAlt='Vida Ativa' /> : <Vida imageSrc={images_vidas.vida_desativada} txtAlt='Vida Perdida' /> }
            </span>
          </div>
        </div>

        <div className="item_score">
          <span>Tempo</span>
          <div>
            {/* <input type="text" /> */}
            <Timer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SerieResultado;
