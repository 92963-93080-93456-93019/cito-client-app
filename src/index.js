import React from 'react';
import ReactDOM from 'react-dom';
import Routes from './routes';

import { HelmetProvider } from 'react-helmet-async';
import CartContextProvider from './contexts/CartContext';

ReactDOM.render(
    <HelmetProvider>
        <CartContextProvider>
          <Routes />
        </CartContextProvider>
    </HelmetProvider>,
  document.getElementById('root')
);
