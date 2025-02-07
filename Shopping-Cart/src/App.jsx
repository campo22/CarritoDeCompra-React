import './App.css'
import { Products } from './components/Products.jsx';
import { products as initialProducts } from './mocks/products.json'
import { useState } from 'react';
import { Header } from './components/Header.jsx';
import { Footer } from './components/Footer.jsx';
import { useFilters } from './HOOKS/useFilters.js';
import { Cart } from './components/Cart.jsx';





function App() {
  const [products] = useState(initialProducts);
  const { filter, filterProducts } = useFilters();


  const filteredProducts = filterProducts(products);

  return (
    < >
      <Header />
      <Cart />
      <Products products={filteredProducts} />
      <Footer filter={filter} />

    </ >
  );
}

export default App;
