import React, { useState } from "react";

function Opcao(props) {
  return (
    <div id="opcao">
      <button
        id="opcao_4"
        type="submit"
        className={props.classButton}
        disabled={props.disabled}
      >
        <img
          className="img_botao"
          src={props.image}
          alt={props.alt}
          disabled={props.disabled}
          onClick={props.onClick}
        />
      </button>
    </div>
  );
}

export default Opcao;
