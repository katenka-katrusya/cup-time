import Modal from 'react-modal';
import { API_URL } from '../const.js';
import { Quantity } from './ui/Quantity.jsx';
import { useState } from 'react';
import { useCart } from '../context/CartContext.jsx';

Modal.setAppElement('#root');

export const ProductModal = ({ isOpen, onRequestClose, data }) => {
  const [quantity, setQuantity] = useState(1);
  const {addToCart} = useCart();

  if (!data) {
    return null;
  }

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  const handleIncrease = () => {
    setQuantity(quantity + 1);
  }

  const handleAddToCart = () => {
    addToCart(data, quantity);
    onRequestClose();
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      portalClassName='modal'
      overlayClassName='modal__overlay'
      className='modal__content'
    >
      <div className='modal__content'>
        <img className='modal__image' src={`${API_URL}${data.img}`} alt={data.title} />
        <div className='modal__info'>
          <div className='modal__header'>
            <h2 className='modal__title'>{data.title}</h2>
            <p className='modal__price'>{data.price}&nbsp;₽</p>
          </div>
          <ul className='modal__list'>
            {Object.entries(data.additional).map(([key, value]) => (
              <li className='modal__item' key={key}>
                <span className='modal__desc'>{key}:</span> {value}
              </li>
            ))}
          </ul>
          <div className='modal__quantity'>
            <div className='modal__quantity-wrapper'>
              <Quantity value={quantity} handleIncrease={handleIncrease} handleDecrease={handleDecrease} />
            </div>
            <button className='modal__quantity-btn' onClick={handleAddToCart}>Добавить</button>
          </div>
        </div>
        <button className='modal__btn' onClick={onRequestClose}>
          <img src='/img/close-modal.svg' alt='Закрытие модального окна' />
        </button>
      </div>
    </Modal>
  );
};
