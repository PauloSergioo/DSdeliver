import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './routes/Home';
import Order from './routes/Order';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/orders" element={<Order />} />
      </Routes>
    </BrowserRouter>
  );
}
