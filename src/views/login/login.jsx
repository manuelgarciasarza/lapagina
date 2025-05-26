import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./login.module.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username === "dafneebertz" && password === "1234") {
      navigate("/inicio");
    } else {
      alert("Usuario o contraseña incorrectos");
    }
  };

  return (
    <div className={style.container}>
      <h3 className={style.title}>LA PÁGINA</h3>
      <div className={style.card}>
        <form onSubmit={handleSubmit} className={style.form}>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />

          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Log in</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
