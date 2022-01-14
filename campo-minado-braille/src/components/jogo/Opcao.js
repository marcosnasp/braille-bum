import React, { useState } from "react";

function Opcao(props) {

  return (
    <div id="opcao">
      <button id="opcao_4" type="submit" className={props.classButton}>
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
