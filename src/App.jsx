import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout.jsx';
import Home from './pages/Home/Home.jsx';
import Product from './components/Product/Product.jsx';
import Cart from './pages/Cart/Cart.jsx';
import { useEffect, useState } from 'react';

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json()).then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  const addToCart = (product) => { setCart([...cart, product]); };

  return (
    <Routes>
      <Route path="/" element={<Layout cart={cart} />}>
        <Route index element={<Home products={products} addToCart={addToCart} />} />
        <Route path="/product/:id" element={<Product products={products} addToCart={addToCart} />} />
        <Route path="/cart" element={<Cart cart={cart} />} />
      </Route>
    </Routes>
  );
}

export default App