import React, { useState, useEffect } from "react";
import axios from "axios";
import {useParams } from "react-router-dom";
import "./DetalleProducto.css";
import PropTypes from 'prop-types';
import { CarritoContext } from "../Carrito/CarritoContext";
import { useContext } from 'react';
import { useNavigate } from "react-router-dom";

const DetalleProducto = () => {
  const [producto, setProducto] = useState({});
  const { id } = useParams(); 
  const context = useContext(CarritoContext);

  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`https://dummyjson.com/products/${id}`)
      .then(response => {
        setProducto(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, [id]);

  const agregarAlCarrito = ()=>{

    context.setCarrito([...context.carrito, producto])
    navigate(`/Carrito`);

  }


  return (
    <>
    <div>
      <h2 className="m-4">Producto: {producto.title}</h2>
      <p>Descripcion: {producto.description}</p>
      <p>Precio: {producto.price}</p>
    <img className="imagen" src={producto.images?.[0]} alt={producto.title}></img>
    </div>
    <button className="agregarCarrito" onClick={() => agregarAlCarrito(producto.id)}>
          Agregar al Carrito
        </button>
</>
  );
};

DetalleProducto.propTypes = {
  agregarAlCarrito: PropTypes.func.isRequired,
};

export default DetalleProducto;

