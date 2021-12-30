import React from "react";

function LetraImagem(props) {
    return (
        <img src={props.letra} className="img_resultado" />
    );
}

export default LetraImagem;