import { Route, Routes } from 'react-router-dom';
import { Home } from 'pages/Home';
import { About } from 'pages/About';
import { Products } from 'pages/Products';
import { NotFound } from 'pages/NotFound';

export const App = () => {
  return (
    <div>
      <Routes path="http://localhost:3000/routing_theory">
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
