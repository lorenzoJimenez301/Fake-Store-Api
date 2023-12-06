import React, { useContext } from 'react';
import { Store } from './StoreContext';

export const Aside = () => {

    const { price, tag, setTag, setPrice } = useContext(Store);

    const handleDelete = (id, newPrice) => {
      const updatedTag = tag.map(item =>
        item.id === id ? { ...item, cont: item.cont - 1 } : item
      ).filter(item => item.cont > 0);

      const isPrice = Math.max(price - newPrice, 0);
      const newNumber = parseFloat(isPrice.toFixed(2));
      setPrice(newNumber)
      setTag(updatedTag);
    };

    return (
        <aside>
            <div className="offcanvas offcanvas-start" data-bs-backdrop="static" id="aside" aria-labelledby="staticBackdropLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title fs-4 m-0 p-0" id="staticBackdropLabel">Shopping Cart</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body p-0 m-0">
                    <ul style={{ listStyle: 'none' }} className='h-100 py-5 px-4 m-0 d-flex flex-column gap-5'>
                        {tag.map((item) => (
                            <li key={item.id} className='d-flex align-items-center justify-content-between gap-3 w-100'>
                                <div className='d-flex align-items-center gap-3'>
                                    <img className='imgShop' src={item.image} alt='shopCar' />
                                    <p className='fs-4 m-0 p-0'>{`x${item.cont}`}</p>
                                </div>
                                <button onClick={() => handleDelete(item.id, item.price)} className='btn btn-outline-danger'>Delete</button>
                            </li>
                        ))}
                    </ul>
                </div>
                <div style={{backgroundColor: 'var(--color'}} className='d-flex justify-content-center align-items-center gap-5 p-3 m-0 p-0 text-light'>
                    <h2 className='m-0 p-0'>Total:</h2>
                    <h2 className='m-0 p-0'>${price}</h2>
                </div>
            </div>
        </aside>
    );
}