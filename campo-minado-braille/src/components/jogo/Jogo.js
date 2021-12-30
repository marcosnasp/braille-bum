import React from "react";
import config from "../../Config";
import Serie from "./Serie";
import Menu from "../Menu";

function Jogo() {
  return (
    <div>
      <Serie config={config} />
    </div>
  );
}

export default Jogo;