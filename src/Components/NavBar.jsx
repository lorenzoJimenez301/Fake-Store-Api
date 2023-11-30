import React from 'react';


export const NavBar = () => {
    return (
        <nav style={{ width: '80vw', height: 'max-content' }} className="navbar bg-body-tertiary d-flex align-items-center justify-content-end my-5 mx-0 rounded-5">
            <div className="container w-auto m-0 p-0">
                <i className="bi bi-cart4 fs-2 me-4 text-dark h-auto"></i>
            </div>
        </nav>
    );
}