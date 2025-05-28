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

  const add = (item) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      setCart(cart.map(cartItem =>
        cartItem.id === item.id ? { ...cartItem, quantity: (cartItem.quantity || 1) + 1 } : cartItem
      ));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  }
  const remove = (item) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    if (existingItem && existingItem.quantity > 1) {
      setCart(cart.map(cartItem =>
        cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem
      ));
    } else {
      setCart(cart.filter(cartItem => cartItem.id !== item.id));
    }
  };

  return (
    <Routes>
      <Route path="/" element={<Layout cart={cart} />}>
        <Route index element={<Home products={products} addToCart={add} />} />
        <Route path="/product/:id" element={<Product products={products} addToCart={add} />} />
        <Route path="/cart" element={<Cart cart={cart} add={add} remove={remove} />} />
      </Route>
    </Routes>
  );
}

export default App