import { Quantity } from './ui/Quantity.jsx';
import { API_URL } from '../const.js';
import { useCart } from '../context/CartContext.jsx';
import { useState } from 'react';

export const CartItem = ({ data }) => {
  const [itemQuantity, setItemQuantity] = useState(data.quantity);
  const { updateQuantity, removeFromCart } = useCart();

  const handleDecrease = () => {
    const newQuantity = itemQuantity - 1;
    if (newQuantity > 0) {
      setItemQuantity(newQuantity);
      updateQuantity(data.id, newQuantity);
    } else {
      removeFromCart(data.id);
    }
  };

  const handleIncrease = () => {
    const newQuantity = itemQuantity + 1;
    setItemQuantity(newQuantity);
    updateQuantity(data.id, newQuantity);
  };

  return (
    <li className='cart-item'>
      <img src={`${API_URL}${data.img}`} alt={data.title} className='cart-item__image' />
      <div className='cart-item__info'>
        <h3 className='cart-item__title'>{data.title}</h3>
        <div className='cart-item__quantity'>
          <Quantity value={data.quantity} handleIncrease={handleIncrease} handleDecrease={handleDecrease} />
        </div>
        <p className='cart-item__price'>{data.price * data.quantity}&nbsp;₽</p>
      </div>
    </li>
  );
};
