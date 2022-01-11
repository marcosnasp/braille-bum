import React from "react";

function LetraImagem(props) {
    return (
        <img src={props.letra} className="img_resultado" alt="Letra Resultado" />
    );
}

export default LetraImagem;