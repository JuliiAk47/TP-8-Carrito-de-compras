import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Productos from "./Paginas/Productos/Productos";
import Home from "./Paginas/Home/Home";
import DetalleProducto from "./Paginas/DetalleProducto/DetalleProducto";
import Contacto from "./Paginas/Contacto/Contacto";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path="/" index element={<Home/>} />
        <Route  path="/productos" element={<Productos/>} ></Route>
        <Route  path="/productos/:id" element={<DetalleProducto/>} ></Route>
        <Route  path="/contacto" element={<Contacto/>} ></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

