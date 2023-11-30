import React, { useContext,useState, createContext } from 'react';

export const Store = createContext();

export const ProviderStoreContext = ({ children }) => {

    const [price, setPrice] = useState(0);

    return (
        <Store.Provider value={{ price, setPrice }}>
            {children}
        </Store.Provider>
    )
}