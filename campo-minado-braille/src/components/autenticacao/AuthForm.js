import React, { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

function AuthForm({ setToken }) {
  const [cadastro, setCadastro] = useState();

  const auth = (
    <div className="login-page">
      <div className="form">
        <LoginForm />
        <p className="message">Não Registrado Ainda? <a href="#" onClick={() => setCadastro(true)}>Criar uma Conta</a></p>
      </div>
    </div>
  );

  const register = (
    <div className="login-page">
      <div className="form">
        <RegisterForm />
        <p className="message">Já Cadastrado? <a href="#" onClick={() => setCadastro(false)}>Logar</a></p>
      </div>
    </div>
  );

  return cadastro ? register : auth;
}

export default AuthForm;
