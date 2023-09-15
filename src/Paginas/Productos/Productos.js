import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Productos = () => {
  const [filtro, setFiltro] = useState("");
  const [productos, setProductos] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    traerProducto("https://dummyjson.com/products");
  }, []);

  const traerProducto = (url) => {
    axios.get(url).then((res) => {
      setTotal(res.data.limit);
      setProductos(res.data.products);
    });
  };

  const buscarPorFiltro = () => {
    axios
      .get(`https://dummyjson.com/products/search?q=${filtro}`)
      .then((res) => {
        setProductos(res.data.products);
      });
  };

  return (
    <div>
      <h1>Productos</h1>

      <ul id="productos">
        <div id="total">Total: {total}</div>
        {productos.map((producto, index) => (
          <li key={index}>
            <Link to={`/productos/${producto.id}`}>
              <b>{producto.title}</b>
            </Link>
          </li>
        ))}
      </ul>

      <input
        type="text"
        value={filtro}
        onChange={(e) => setFiltro(e.target.value)}
      />
      <button onClick={buscarPorFiltro}>BUSCAR</button>
    </div>
  );
};

export default Productos;
