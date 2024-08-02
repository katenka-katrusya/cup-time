import { Route, Routes } from 'react-router-dom';
import { Promo } from './Promo.jsx';
import { Products } from './Products.jsx';
import { Cart } from './Cart.jsx';
import { Order } from './Order.jsx';

export const Router = () => {
  return (
    <Routes>
      <Route path='/' element={
        <>
          <Promo />
          <Products />
        </>
      } />
      <Route path='/cart' element={
        <>
          <Cart />
          <Order />
        </>
      } />
    </Routes>
  );
};
