import React, { useContext, useState } from 'react';
import { CarritoContext } from './CarritoContext';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import './CarritoModal.css';

const Carrito = () => {
  const { carrito, setCarrito } = useContext(CarritoContext);
  const [modalAbierto, setModal] = useState(false);

  console.log("CARRITO", carrito);

  const eliminarProducto = (id) => {
    setCarrito(carrito.filter((producto) => producto.id !== id));
  };

  const comprarProductoCarrito = () => {
    setModal(true);
  };

  const cerrarModal = () => {
    setModal(false);
  };

  return (
    
      <div className="container">
        <div className="header">
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Bienvenido a tu carrito</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Link className='m-2' to="/Productos">Productos  </Link>
                <Link className='m-2' to="/contacto">Contacto</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <div>
            <h2 style={{ color: 'black' }}>Carrito de Compras</h2>
            
              {carrito.map((producto) => (
                <h5  key={producto.id}>
                  {producto.title} - ${producto.price}
                  <br></br><br></br><button className = 'eliminarCarrito' onClick={() => eliminarProducto(producto.id)}>Eliminar del Carrito</button>
                </h5>
              ))}
            <br></br><br></br>
            <button className='buttonCarrito'
              onClick={comprarProductoCarrito}
            >
              Comprar
            </button>
            <Modal show={modalAbierto} onHide={cerrarModal}>
              <Modal.Header closeButton>
                <Modal.Title>Felicidades amigazo ya compraste</Modal.Title>
              </Modal.Header>
            </Modal>
          </div>
        </div>
      </div>
    
  );
};

export default Carrito;
