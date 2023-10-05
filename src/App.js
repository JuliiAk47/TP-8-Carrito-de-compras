import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Productos from "./Paginas/Productos/Productos";
import Home from "./Paginas/Home/Home";
import DetalleProducto from "./Paginas/DetalleProducto/DetalleProducto";
import Contacto from "./Paginas/Contacto/Contacto";
import {CarritoContext} from "./Paginas/Carrito/CarritoContext";
const App = () => {
  const [carrito, setCarrito] = useState([]);
  return (
    <CarritoContext.Provider value = {[carrito, setCarrito]}>
    <BrowserRouter>
      <Routes>
        <Route  path="/" index element={<Home/>} />
        <Route  path="/productos" element={<Productos/>} ></Route>
        <Route  path="/productos/:id" element={<DetalleProducto/>} ></Route>
        <Route  path="/contacto" element={<Contacto/>} ></Route>
      </Routes>
    </BrowserRouter>
    </CarritoContext.Provider>
  );
};

export default App;

