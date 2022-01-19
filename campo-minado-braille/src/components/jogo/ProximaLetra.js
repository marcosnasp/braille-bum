import React from "react";

function ProximaLetra(props) {

  function proximaLetra() {
    console.log("chamou proxima letra")
    props.proximaLetra();
  }
  return (
    <a href="#" onClick={() => proximaLetra()}>
      <img
        src={props.imageSrc}
        className="img-botao-proximo"
        alt="Proxima Letra"
      />
    </a>
  );
}

export default ProximaLetra;
