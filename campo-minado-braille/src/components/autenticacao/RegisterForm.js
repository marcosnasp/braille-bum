import React, { useState } from "react";
import Axios from "axios";

function RegisterForm() {
  const [loginNewUser, setLoginNewUser] = useState("");
  const [passwordNewUser, setPasswordNewUser] = useState("");
  const [emailNewUser, setEmailNewUser] = useState("");

  const submitNewUser = () => {
    Axios.post("http://localhost:3001/api/user", {
      loginNewUser: loginNewUser,
      passwordNewUser: passwordNewUser,
      emailNewUser: emailNewUser,
    }).then(() => {
      console.log("Inserted User");
    });
  };

  return (
    <form className="register-form">
      <input
        type="text"
        placeholder="Nome de Usuário"
        onChange={(e) => setLoginNewUser(e.target.value)}
      />
      <input
        type="password"
        placeholder="Senha"
        onChange={(e) => setPasswordNewUser(e.target.value)}
      />
      <input
        type="text"
        placeholder="Email"
        onChange={(e) => setEmailNewUser(e.target.value)}
      />
      <button onClick={() => submitNewUser()}>Criar</button>
    </form>
  );
}

export default RegisterForm;