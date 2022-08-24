import './App.css';
import ProductsGrid from './pages/ProductsGrid';
import { ProductProvider } from './context/product-context'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ProductProvider>
          <ProductsGrid />
        </ProductProvider>
      </header>
    </div>
  );
}

export default App;
