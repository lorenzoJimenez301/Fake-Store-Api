import React from 'react';

export const NavBar = () => {
    return (
        <nav style={{ width: '80vw', height: 'max-content', backgroundColor: 'var(--color2)' }} className="navbar d-flex flex-nowrap align-items-center justify-content-end my-5 mx-0 rounded-5">
            <div className='me-4'>
                <form action="" className='d-flex flex-nowrap'>
                    <input style={{width: '20vw', outline: 'none', border: '.1vw solid var(--color)'}} className='rounded-5 b me-3 bg-tertiary ps-3' type="text" />
                    <button style={{backgroundColor: 'var(--color)'}} className='btn rounded-5 text-white'>Search</button>
                </form>
            </div>
            <div className="container w-auto m-0 p-0">
                <button data-bs-toggle="offcanvas" data-bs-target="#aside" aria-controls="staticBackdrop" style={{ backgroundColor: 'transparent', border: 'none', color: 'var(--color)' }} className="bi bi-cart4 fs-2 me-4 h-auto"></button>
            </div>
        </nav>
    );
}