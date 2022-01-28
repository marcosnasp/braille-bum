import React from "react";

function OpcaoDesabilitada(props) {
  return (
    <div id="opcao">
      <button
        id="opcao_4"
        type="submit"
        className={props.classButton}
        disabled="true"
      >
        <img
          className="img_botao"
          src={props.image}
          alt={props.alt}
          disabled="true"
        />
      </button>
    </div>
  );
}

export default OpcaoDesabilitada;
