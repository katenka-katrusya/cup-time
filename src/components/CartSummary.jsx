import { useOrder } from '../context/OrderContext.jsx';
import { API_URL } from '../const.js';
import { useState } from 'react';
import { useCart } from '../context/CartContext.jsx';

export const CartSummary = ({classNameComponent}) => {
  const [orderStatus, setOrderStatus] = useState(null);
  const [orderId, setOrderId] = useState(null);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const { cart, clearCart } = useCart();
  const { orderDetails, clearOrderDetails } = useOrder();

  const totalPrice = cart?.reduce((acc, item) => item.price * item.quantity + acc, 0) ?? 0;


  const handleSubmit = async () => {
    const orderData = {
      ...orderDetails,
      items: cart.map(({ id, quantity }) => ({ id, quantity })),
    };

    try {
      const response = await fetch(`${API_URL}/api/orders`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });

      if (!response.ok) {
        throw new Error('Ошибка при отправке заказа');
      }
      const result = await response.json();

      setOrderStatus('success');
      setOrderId(result.order.id);
      clearCart();
      clearOrderDetails();
    } catch (error) {
      setOrderStatus('error');
      console.error(`Ошибка при создании заказа: ${error}`);
    } finally {
      setIsOpenModal(true);
    }
  };

  return (
    <div className={classNameComponent}>
      <h3 className='cart__summary-title'>Итого:</h3>
      <p className='cart__total'>{totalPrice}&nbsp;₽</p>
      <button className='cart__order-button' onClick={handleSubmit}>
        Заказать
      </button>
    </div>
  )
}
