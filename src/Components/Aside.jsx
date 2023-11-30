import React, { useContext } from 'react';
import { Store } from './StoreContext';

export const Aside = () => {

    const { price } = useContext(Store);

    return (
        <aside>
            <div className="offcanvas offcanvas-start" data-bs-backdrop="static" id="aside" aria-labelledby="staticBackdropLabel">
                <div className="offcanvas-header">
                    <h5 className="offcanvas-title" id="staticBackdropLabel">Offcanvas</h5>
                    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                </div>
                <div className="offcanvas-body">
                    <div>
                        <p>${price}</p>
                    </div>
                </div>
            </div>
        </aside>
    );
}