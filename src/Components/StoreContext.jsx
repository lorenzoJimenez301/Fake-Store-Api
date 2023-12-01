import React, { useState, createContext } from 'react';

export const Store = createContext();
export const Tag = createContext();

export const ProviderStoreContext = ({ children }) => {

    const [price, setPrice] = useState(0);
    const [tag, setTag] = useState([]);
    const [cont, setCont] = useState(0);

    return (
        <Store.Provider value={{ price, setPrice, tag, setTag, cont, setCont }}>
            {children}
        </Store.Provider>
    )
}