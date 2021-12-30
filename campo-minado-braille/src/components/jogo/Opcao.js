import React, { useState } from "react";

function Opcao(props) {
  const [image, setImage] = useState("");

  return (
    <div id="opcao">
      <button id="opcao_4" type="submit">
        <img
          className="img_botao"
          src={props.image}
          alt={props.alt}
          onClick={props.onClick}
        />
      </button>
    </div>
  );
}

export default Opcao;
