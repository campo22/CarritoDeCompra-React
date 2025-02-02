import './App.css'
import { Products } from './components/Products.jsx';
import { products as initialProducts } from './mocks/products.json'
import { useState } from 'react';

function App() {
  const [products] = useState(initialProducts);

  const [filter, setFilter] = useState({
    category: 'all',
    minPrice: 50
  });

  const filterProducts = (products) => {
    return products.filter(product => {
      return (
        product.price >= filter.minPrice && // Aquí estaba el error
        (filter.category === 'all' || product.category === filter.category)
      );
    });
  };

  const filteredProducts = filterProducts(products);

  return (
    <Products products={filteredProducts} />
  );
}

export default App;
