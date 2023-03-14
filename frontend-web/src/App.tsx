import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css'
import HomeCard from './components/HomeCard';
import Home from './routes/Home';
import Order from './routes/Order';

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />}>
        <Route index element={<Navigate to="/home" />} />
        <Route path="home" element={<HomeCard/>} />
      </Route>
      <Route path="orders" element={<Order/>}></Route>
    </Routes>
  </BrowserRouter>
  );
}
