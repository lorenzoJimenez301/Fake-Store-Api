import { useEffect, useState } from 'react';
import { NavBar } from './Components/NavBar';
import './App.css';
import axios from 'axios';

const Modal = ({ product }) => {
  return (
    <div className="modal fade" id={`productModal${product.id}`} tabIndex="-1" aria-labelledby={`productModalLabel${product.id}`} aria-hidden="true">
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content">
          <div className='modal-header d-flex justify-content-center'>
            <h5 className='m-0 p-0 fs-3 fw-bold'>{product.title}</h5>
            <button type="button" class="btn-close" aria-label="Close" data-bs-dismiss="modal"></button>
          </div>
          <div className='modal-body d-flex flex-row align-items-center'>
            <div className='p-4 text-center'>
              <img className='imgProductModal' src={product.image} alt='img' />
            </div>
            <div className='p-4 fs-6 fw-lighter text-justify'>
              <p className='ms-4 p-0'>{product.description}</p>
            </div>
          </div>
          <div className='modal-footer p-0 d-flex flex-row flex-row justify-content-between align-items-center'>
            <button className='btn btn-success rounded-top-0 rounded-end-0 w-50 m-0 p-3 fs-4 fw-bold'>
              Buy
            </button>
            <p className='text-center w-50 m-0 fs-4 fw-bold'>${product.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function App() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products?limit=12');
        setProducts(response.data);
      } catch (e) {
        throw e;
      }
    }
    fetchProducts();
  }, []);

  return (
    <>
    <NavBar />
      <div className="App">
        <ul className='gridContainer m-0'>
          {products.map((product) => (
            <li key={product.id}>
              <h2 className='titleProduct'>{product.title}</h2>
              <img className='imgProduct' src={product.image} alt='Product' />
              <button data-bs-target={`#productModal${product.id}`} data-bs-toggle="modal" className='btn btnView p-1 px-3 mt-4'>View</button>
              <Modal product={product} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
