import React, { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ProductsGrid from './pages/ProductsGrid';
import ProtectedRoute from './components/ProtectedRoute';
import Login from './pages/Login';
import { ProductProvider } from './context/product-context'
import { LoginProvider } from './context/loginContext'
// import CartGrid from './pages/CartGrid';
// import ProductDetails from './pages/ProductDetails';

const CartGrid = lazy(() => import('./pages/CartGrid'))
const ProductDetails = lazy(() => import('./pages/ProductDetails'))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Suspense fallback={<div className='loading'>Loading...</div>}>
      <BrowserRouter> {/* //connect your app to the browser's URL */}
        <LoginProvider>
          <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/products' element={<App />}>
              <Route index element={<ProductsGrid />} />
              <Route path='user' element={<ProtectedRoute />}>
                <Route path=':productId' element={<ProductDetails />} />
                <Route path='cart' element={<CartGrid />} />
              </Route>
              <Route path='*' element={<main><h3>There is nothing here</h3></main>} />
            </Route>
          </Routes>
        </LoginProvider>
      </BrowserRouter>
    </Suspense>
  </React.StrictMode >
);

