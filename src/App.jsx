import React, { useEffect } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";

// views
import Inicio from "./views/Inicio/inicio.jsx";
import Login from "./views/login/login.jsx";
import Damian from "./views/perfiles/damian/damian.jsx";
import Constanza from "./views/perfiles/constanza/constanza.jsx";
import Abril from "./views/perfiles/abril/abril.jsx";
import Valentin from "./views/perfiles/valentin/valentin.jsx";

function MainApp() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/" element={<Login />}></Route>
          <Route path="/damian" element={<Damian />}></Route>
          <Route path="/constanza" element={<Constanza />}></Route>
          <Route path="/abril" element={<Abril />}></Route>
          <Route path="/valentin" element={<Valentin />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default MainApp;
