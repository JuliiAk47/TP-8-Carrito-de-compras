import React, { useContext, useState } from 'react';
import { CarritoContext, useCarrito } from './CarritoContext';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';
import { Modal } from 'react-bootstrap';
import './CarritoModal.css';

const Carrito = () => {
  const { carrito, setCarrito } = useContext(CarritoContext);
  const [modalAbierto, setModalAbierto] = useState(false);

  console.log("CARRITO", carrito);

  const quitarProducto = (id) => {
    setCarrito(carrito.filter((producto) => producto.id !== id));
  };

  const handleComprar = () => {
    setModalAbierto(true);
  };

  const handleCloseModal = () => {
    setModalAbierto(false);
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
                <h5 style={{ color: 'black' }} key={producto.id}>
                  {producto.title} - ${producto.price}
                  <br></br><br></br><button onClick={() => quitarProducto(producto.id)}>Eliminar del Carrito</button>
                </h5>
              ))}
            <br></br><br></br>
            <button
              onClick={handleComprar}
              style={{
                backgroundColor: '#E74C3C',
                color: '#FDEBD0',
                border: 'none',
                padding: '10px 20px',
                fontSize: '16px',
                cursor: 'pointer'
              }}
            >
              Comprar
            </button>
            <Modal show={modalAbierto} onHide={handleCloseModal}>
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
