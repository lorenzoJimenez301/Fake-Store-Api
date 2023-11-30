import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';

function App() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products?limit=6');
        setProducts(response.data);
      }catch(e){
        throw e;
      }
    }
    fetchProducts();
  },[]);

  return (
    <div className="App">
      <ul className='gridContainer'>
        {products.map((product)=>(
          <li key={product.id}>
            <h2 className='titleProduct'>{product.title}</h2>
            <img className='imgProduct' src={product.image} alt='Product' />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
