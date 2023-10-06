import React, { useState, useEffect} from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import '../Productos/Productos.css';


const Productos = () => {
  const [filtro, setFiltro] = useState("");
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    traerProducto("https://dummyjson.com/products");
  }, []);
  useEffect(() => {
    buscarProductos();
}, []);

const buscarProductos = () => {
    axios.get('https://dummyjson.com/products')
        .then(response => {
            setProductos(response.data.products);
        })
        .catch(error => {
            console.error(error);
        });
        console.log(productos);
};
  
  
  const traerProducto = (url) => {
    axios.get(url).then((res) => {
      setProductos(res.data.products);
    });
  };

  const browser = () => {
    axios
      .get(`https://dummyjson.com/products/search?q=${filtro}`)
      .then((res) => {
        setProductos(res.data.products);
      });
  };

  return (
    <div>
      <h1>Productos</h1>

      <div className = 'listaProd' id="productos">
        {productos.map((producto, index) => (
          <div key={index}>
            <Link to={`/productos/${producto.id}`}>
              <b>{producto.title}</b>              
            </Link>
          </div>
        ))}
        
      </div>

      <input
        type="text"
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
      />
      <button onClick={browser}>BUSCAR</button>
    </div>
  );
};

export default Productos;
