import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import OrderLocation from './components/OrderLocation';
import Home from './routes/Home';
import Order from './routes/Order';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/orders" element={<Order />} />
        <Route path="/maps" element={<OrderLocation />} />
      </Routes>
    </BrowserRouter>
  );
}
