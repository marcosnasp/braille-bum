import React from "react";
import config from "../../Config";
import Serie from "./Serie";

function Jogo() {
  return (
    <div>
      <Serie config={config} />
    </div>
  );
}

export default Jogo;