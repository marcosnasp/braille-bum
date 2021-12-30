import React from "react";
//import AuthForm from "./components/autenticacao/AuthForm";
import config from "./Config";
import Serie from "./components/jogo/Serie";
import Timer from "./components/temporizador/Timer";

function App() {
  /* 
  return (
    <AuthForm />
  );
  */
  return <Serie config={config} />;
}

export default App;
