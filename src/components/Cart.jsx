import { CartItem } from './CartItem.jsx';
import { useCart } from '../context/CartContext.jsx';
import { SkeletonLoader } from './SkeletonLoader.jsx';
import { useState } from 'react';
import { useOrder } from '../context/OrderContext.jsx';
import { API_URL } from '../const.js';
import Modal from 'react-modal';

Modal.setAppElement('#root');

export const Cart = () => {
  const [orderStatus, setOrderStatus] = useState(null);
  const [orderId, setOrderId] = useState(null);
  const [isOpenModal, setIsOpenModal] = useState(false);

  const { cart, clearCart } = useCart();
  const { orderDetails, clearOrderDetails } = useOrder();

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

  const closeModal = () => {
    setIsOpenModal(false);
  };

  const totalPrice = cart?.reduce((acc, item) => item.price * item.quantity + acc, 0) ?? 0;
  const totalQuantity = cart?.reduce((acc, item) => acc + item.quantity, 0) ?? 0;

  return (
    <section className='cart'>
      <div className='container cart__container'>
        <h2 className='cart__title'>Корзина ({totalQuantity})</h2>
        <ul className='cart__list'>
          {cart
           ? cart.map(product => <CartItem key={product.id} data={product} />)
           : <SkeletonLoader />
          }
        </ul>

        <div className='cart__summary'>
          <h3 className='cart__summary-title'>Итого:</h3>
          <p className='cart__total'>{totalPrice}&nbsp;₽</p>
          <button className='cart__order-button' onClick={handleSubmit}>
            Заказать
          </button>
        </div>
      </div>

      <Modal
        onRequestClose={closeModal}
        isOpen={isOpenModal}
        className='modal-cart'
        overlayClassName='modal-cart__overlay'
      >
        <h2 className='modal-cart__title'>
          {orderStatus === 'success'
           ? `Заказ успешно оформлен! Номер вашего заказа: ${orderId}`
           : 'Произошла ошибка при оформлении заказа.'}
        </h2>
        <button className='modal-cart__btn' onClick={closeModal}>Закрыть</button>
      </Modal>
    </section>
  );
};
