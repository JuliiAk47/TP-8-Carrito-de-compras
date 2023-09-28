import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import "./DetalleProducto.css";

const DetalleProducto = () => {
  const [producto, setProducto] = useState({});
  const { id } = useParams(); 

  useEffect(() => {
    traerProducto("https://dummyjson.com/products/" + id);
  }, []);

  const traerProducto = (url) => {
    axios.get(url).then((res) => {
      setProducto(res.data);
    });
  };


 

  return (
    <div>
      <h1>Detalle del Producto {id}</h1>
      <h2>Producto: {producto.title}</h2>
      <p>Descripcion: {producto.description}</p>
      <p>Precio: {producto.price}</p>
    <img className="imagen" src={producto.images?.[0]} alt={producto.title}></img>
    </div>
  );
};

export default DetalleProducto;

