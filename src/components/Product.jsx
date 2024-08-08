import { API_URL } from '../const.js';
import { useEffect, useState } from 'react';
import { ProductModal } from './ProductModal.jsx';

export const Product = ({ data }) => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isModalOpen ? 'hidden' : 'auto';
  }, [isModalOpen]);


  const openModal = (event) => {
    event.preventDefault();
    setIsModalOpen(true);
  }

  const closeModal = () => {
    setIsModalOpen(false);
  }

   return (
    <li className='products__item'>
      <a
        className='product__link'
        href='#'
        onClick={openModal}
        aria-label={`Открыть модальное окно для ${data.title}`}>
        <article className='product'>
          <img src={`${API_URL}${data.img}`} alt={data.title} className='product__image' />
          <div className='product__content'>
            <h3 className='product__title'>{data.title}</h3>
            <p className='product__price'>{data.price}&nbsp;₽</p>
          </div>
        </article>
      </a>
      <ProductModal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        data={data}
      />
    </li>
   );
};
