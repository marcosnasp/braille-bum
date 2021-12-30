import React from "react";
import { Switch, Route, Routes } from "react-router-dom";

import Usuario from "../pages/Usuario";
import Sobre from "../pages/Sobre";

function Routes() {
  return (
    <Routes>
      <Route path="/" exact component={Sobre} />
      <Route path="/usuario" component={Usuario} />
      <Route component={Sobre} />
    </Routes>
  );
}

export default Routes;