import React from "react";

function Braillinho(props) {

  return (
    <div className="img-braillinho">
      <img src={props.imageSrc} className="img-braillinho" alt="Braillinho" />
    </div>
  );
}

export default Braillinho;
