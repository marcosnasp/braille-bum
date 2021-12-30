import React from "react";

function LetraResultado(props) {
  const image_bomba = "image/mina.png";
  const image_conquista = "image/bandeira.png";
  const image_a = "image/a.png";

  const alt_image = "Dica";

  return (
    <div id="caixa_bombas_bandeiras">
      <img
        src={props.letras.imagem_dicas}
        alt={alt_image}
        className="img_dicas_bandeiras_bombas"
      />
    </div>
  );
}

export default LetraResultado;
