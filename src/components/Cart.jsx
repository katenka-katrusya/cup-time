import { CartItem } from './CartItem.jsx';
import { useCart } from '../context/CartContext.jsx';
import { Product } from './Product.jsx';
import { SkeletonLoader } from './SkeletonLoader.jsx';

export const Cart = () => {
  const { cart } = useCart();
  const totalPrice =
    cart
    ? cart.reduce((acc, item) => item.price * item.quantity + acc, 0)
    : 0;
  const totalQuantity =
    cart
    ? cart.reduce((acc, item) => acc + item.quantity, 0)
    : 0;

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
          <button className='cart__order-button'>Заказать</button>
        </div>
      </div>
    </section>
  );
};
