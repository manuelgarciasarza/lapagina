import React, { useEffect } from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import "./App.css";

// views
import Inicio from "./views/Inicio/inicio.jsx";
import Login from "./views/login/login.jsx";

function MainApp() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/" element={<Login />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default MainApp;
