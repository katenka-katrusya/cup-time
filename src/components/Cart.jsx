import { CartItem } from './CartItem.jsx';
import { useCart } from '../context/CartContext.jsx';
import { SkeletonLoader } from './SkeletonLoader.jsx';
import { useState } from 'react';
import Modal from 'react-modal';
import { CartSummary } from './CartSummary.jsx';

Modal.setAppElement('#root');

export const Cart = () => {
  const [orderStatus, setOrderStatus] = useState(null);
  const [orderId, setOrderId] = useState(null);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const { cart, clearCart } = useCart();

  const closeModal = () => {
    setIsOpenModal(false);
  };

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
        <CartSummary classNameComponent='cart__summary' />
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
