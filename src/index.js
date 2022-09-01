import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductsGrid from './pages/ProductsGrid';
// import CartGrid from './pages/CartGrid';
// import ProductDetails from './pages/ProductDetails';

const CartGrid = lazy(() => import('./pages/CartGrid'))
const ProductDetails = lazy(() => import('./pages/ProductDetails'))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Suspense fallback={<div className='loading'>Loading...</div>}>
      <BrowserRouter> {/* //connect your app to the browser's URL */}
        <Routes>
          <Route path='/' element={<App />}>
            <Route path='products' element={<ProductsGrid />} />
            <Route path='products/:productId' element={<ProductDetails />} />
            <Route path='cart' element={<CartGrid />} />
            <Route path='*' element={<main><h3>There is nothing here</h3></main>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  </React.StrictMode >
);

