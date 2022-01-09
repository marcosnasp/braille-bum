import React from "react";
import Timer from "../temporizador/Timer";

function SerieResultado(props) {
  const images_cristais = {
    cristal_um: "image/cristal_azul.png",
    cristal_dois: "image/cristal_rosa.png",
    cristal_tres: "image/cristal_verde.png",
  };

  const images_vidas = {
    vida_ativa: "image/vida_preenchida.png",
    vida_desativada: "image/coracao_desativado.jpg",
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
              <img src={images_cristais.cristal_um} alt="Cristal Um" />
              <img src={images_cristais.cristal_dois} alt="Cristal Dois" />
              <img src={images_cristais.cristal_tres} alt="Cristal Três" />
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
              <img src={images_vidas.vida_ativa} alt="Vida Ativa" />
              <img src={images_vidas.vida_ativa} alt="Vida Ativa" />
              <img src={images_vidas.vida_ativa} alt="Vida Ativa" />
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
