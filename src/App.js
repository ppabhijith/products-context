import './App.css';
import ProductsGrid from './pages/ProductsGrid';
import { ProductProvider } from './context/product-context'
import Nav from './components/Nav';
import { Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <header className="App-header flex">
        <ProductProvider>
          <Nav />
          <Routes>
            <Route path='/' element={<ProductsGrid />} />
            <Route path='products' element={<ProductsGrid />} />
            <Route path='cart' element={<ProductsGrid />} />

          </Routes>
        </ProductProvider>
      </header>
    </div>
  );
}

export default App;
