import React, { useState } from "react";
import Axios from "axios";

function LoginForm({ setToken }) {

  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");

  const authentication = () => {
    Axios.post("http://localhost:3001/login", {
      login: login,
      password: password,
    }).then((response) => {
      if (response.data.message) {
        console.log(response.data.message);
        //setLoginStatus(response.data.message);
      } else {
        console.log(response.data[0].userName)
        //setLoginStatus(response.data[0].userName);
      }
    });
  };

  return (
    <form className="login-form">
      <input
        type="text"
        placeholder="nome de usuário"
        onChange={(e) => setLogin(e.target.value)}
      />
      <input
        type="password"
        placeholder="senha"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={() => authentication()}>Login</button>
    </form>
  );
}

export default LoginForm;
