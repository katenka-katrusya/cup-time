import { Quantity } from './ui/Quantity.jsx';

export const CartItem = ({ data }) => {
  return (
    <li className='cart-item'>
      <img src={data.image} alt={data.title} className='cart-item__image' />
      <div className='cart-item__info'>
        <h3 className='cart-item__title'>{data.title}</h3>
        <div className='cart-item__quantity'>
          <Quantity />
        </div>
        <p className='cart-item__price'>{data.price}&nbsp;₽</p>
      </div>
    </li>
  );
};
