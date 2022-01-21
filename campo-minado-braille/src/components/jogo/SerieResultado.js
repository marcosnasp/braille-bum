import React from "react";
import Timer from "../temporizador/Timer";
import Vida from "./Vida";
import Cristal from "./Cristal";

function SerieResultado(props) {

  const images_cristais = {
    cristal_azul: "image/cristal_azul.png",
    cristal_rosa: "image/cristal_rosa.png",
    cristal_verde: "image/cristal_verde.png",
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
              {props.cristais[0] ? <Cristal imageSrc={images_cristais.cristal_azul} txtAlt='Cristal Azul Ativo' /> : <Cristal imageSrc={images_cristais.cristal_inativo} txtAlt='Cristal Desativado' /> }
              {props.cristais[1] ? <Cristal imageSrc={images_cristais.cristal_rosa} txtAlt='Cristal Rosa Ativo' /> : <Cristal imageSrc={images_cristais.cristal_inativo} txtAlt='Cristal Desativado' /> }
              {props.cristais[2] ? <Cristal imageSrc={images_cristais.cristal_verde} txtAlt='Cristal Verde Ativo' /> : <Cristal imageSrc={images_cristais.cristal_inativo} txtAlt='Cristal Desativado' /> }
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
            <Timer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SerieResultado;
