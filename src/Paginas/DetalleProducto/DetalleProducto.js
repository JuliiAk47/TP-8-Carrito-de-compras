import React, { useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import "./DetalleProducto.css";
import { useCarrito } from '../CarritoContext';
import PropTypes from 'prop-types';

const DetalleProducto = () => {
  const [producto, setProducto] = useState({});
  const { id } = useParams(); 
  const { agregarAlCarrito } = useCarrito();

  useEffect(() => {
    traerProducto("https://dummyjson.com/products/" + id);
  }, []);

  const traerProducto = (url) => {
    axios.get(url).then((res) => {
      setProducto(res.data);
    });
  };

  const handleAgregarAlCarrito = () => {
    if (producto) {
      agregarAlCarrito({ ...producto }); // Agrega la cantidad al producto
    }
  };
 

  return (
    <div>
      <h1>Detalle del Producto {id}</h1>
      <h2>Producto: {producto.title}</h2>
      <p>Descripcion: {producto.description}</p>
      <p>Precio: {producto.price}</p>
    <img className="imagen" src={producto.images?.[0]} alt={producto.title}></img>
    <button onClick={handleAgregarAlCarrito}>Añadir al Carrito</button>
    </div>
  );
};

DetalleProducto.propTypes = {
  agregarAlCarrito: PropTypes.func.isRequired,
};

export default DetalleProducto;

