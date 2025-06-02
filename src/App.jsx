import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/Layout/Layout.jsx';
import Home from './pages/Home/Home.jsx';
import Product from './components/Product/Product.jsx';
import Cart from './pages/Cart/Cart.jsx';
import { useEffect, useState } from 'react';
import Login from './pages/Login/Login.jsx';
import Profile from './pages/Profile/Profile.jsx';
import Register from './pages/Register/Register.jsx';

function App() {
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState(() => {
    const storedUsers = localStorage.getItem('users');
    return storedUsers
      ? JSON.parse(storedUsers)
      : [
          { id: 1, name: 'John', email: 'john@gmail.com', password: '1234' },
          { id: 2, name: 'Jane', email: 'jane@gmail.com', password: '1234' },
        ];
  });

  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(error => console.error('Error fetching products:', error));
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('users', JSON.stringify(users));
  }, [users]);

  const add = (item) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      setCart(cart.map(cartItem =>
        cartItem.id === item.id ? { ...cartItem, quantity: (cartItem.quantity || 1) + 1 } : cartItem
      ));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

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
        <Route path="/login" element={<Login users={users} />} />
        <Route path="/register" element={<Register setUsers={setUsers} />} />
        <Route path="/profile/:id" element={<Profile />} />
      </Route>
    </Routes>
  );
}

export default App;