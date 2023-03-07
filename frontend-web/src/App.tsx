import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css'
import Home from './routes/Home';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
