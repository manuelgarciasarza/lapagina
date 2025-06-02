import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import style from "./login.module.css";
import usuarios from "../../utils/usuarios";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const usuarioEncontrado = usuarios.find(
      (u) => u.user === username && u.pass === password
    );

    if (usuarioEncontrado) {
      // Guardar en localStorage
      localStorage.setItem("usuario", usuarioEncontrado.nombre);
      localStorage.setItem("pais", usuarioEncontrado.country);

      // Confirmar por consola
      console.log("✅ Usuario autenticado:");
      console.log("Nombre:", usuarioEncontrado.nombre);
      console.log("País:", usuarioEncontrado.country);

      // Ir a /inicio
      navigate("/inicio");
    } else {
      alert("❌ Usuario o contraseña incorrectos");
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
            placeholder=""
          />

          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder=""
          />

          <button type="submit">Log in</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
