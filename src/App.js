import './App.css';
import { ProductProvider } from './context/product-context'
import Nav from './components/Nav';
import { Outlet } from 'react-router-dom';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ProductProvider>
          <Nav />
          <Outlet />
        </ProductProvider>
      </header>
    </div>
  );
}

export default App;
