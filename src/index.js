import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { ProductsProvider } from './context/products_context';
import { FilterProvider } from './context/filter_context';
import { CartProvider } from './context/cart_context';
import { UserProvider } from './context/user_context';
import { Auth0Provider } from '@auth0/auth0-react';


const root = ReactDOM.createRoot(document.getElementById("root"));

//dev-6hwjew5yi83840nf.us.auth0.com
//hTPIasufQHuTolRRGclLfmZ1A2Dsaw2c

root.render(
    <Auth0Provider
        domain='dev-6hwjew5yi83840nf.us.auth0.com'
        clientId='hTPIasufQHuTolRRGclLfmZ1A2Dsaw2c'
        authorizationParams={{ redirect_uri: window.location.origin }}

    >
        <UserProvider>
            <ProductsProvider>
                <FilterProvider>
                    <CartProvider>
                        <App />
                    </CartProvider>
                </FilterProvider>
            </ProductsProvider>
        </UserProvider>
    </Auth0Provider>
);


