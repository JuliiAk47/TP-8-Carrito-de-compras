import ListaProducto from "../Productos/Productos";
import { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [productos, setProductos] = useState([]);
  
  useEffect(() => {
    let url = 'https://dummyjson.com/products';
    
    axios.get(url)
      .then(response => {
        setProductos(response.data.products);
      })
      .catch(error => {
        console.log(error);
      });
  });

  return (
    <>
    <ListaProducto tope="6" Productos={productos}></ListaProducto>    
    </>
  );
 };
 
export default Home;
