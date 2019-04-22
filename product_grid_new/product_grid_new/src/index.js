import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ProductProvider } from './components/Context';


ReactDOM.render(
    <ProductProvider>
        <App />
    </ProductProvider>,    
    document.getElementById('root')
    );
