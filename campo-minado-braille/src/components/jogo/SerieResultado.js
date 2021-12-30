import React from "react";
import Timer from "../temporizador/Timer";

function SerieResultado(props) {
  const images_cristais = {
    cristal_um: "image/cristal_azul.png",
    cristal_dois: "image/cristal_rosa.jpg",
    cristal_tres: "image/cristal_verde.jpg",
  };

  const images_vidas = {
      vida_ativa: "image/coracao_ativo.jpg",
      vida_desativada: "image/coracao_desativado.jpg"
  };
  
  console.log(props.cristais);
  console.log(props.vidas);
  console.log(props.pontos);
  console.log(props.progresso);
  console.log(images_vidas);
  console.log(images_cristais);

  const class_name_icones = "img_dicas";

  return (
    <div className="resultados-box">
      <div>
        <p>Cristais</p>
        <img src={images_cristais.cristal_um} alt="Cristal Um" className={class_name_icones} />
        <img src={images_cristais.cristal_dois} alt="Cristal Dois" className={class_name_icones} />
        <img src={images_cristais.cristal_tres} alt="Cristal Três" className={class_name_icones} />
      </div>
      <div>
          <p>Pontos</p>
          <input type="text" value={props.pontos} />
      </div>
      <div>
          Progresso
      </div>
      <div>
          <p>Vidas</p>
          <img src={images_vidas.vida_ativa} alt="Vida Ativa" className={class_name_icones} />
          <img src={images_vidas.vida_ativa} alt="Vida Ativa" className={class_name_icones} />
          <img src={images_vidas.vida_ativa} alt="Vida Ativa" className={class_name_icones} />
      </div>
      <div>
          <p>Tempo</p>
          <Timer />
      </div>
    </div>
  );
}

export default SerieResultado;
