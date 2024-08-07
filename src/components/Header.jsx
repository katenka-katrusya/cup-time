import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../context/CartContext.jsx';
import { useProducts } from '../context/ProductContext.jsx';

export const Header = () => {
  const { cart } = useCart();
  const { categories } = useProducts();
  const totalQuantity = cart?.reduce((acc, item) => acc + item.quantity, 0) ?? 0;

  const location = useLocation();
  const getActiveClass = (category) => {
    const currentCategory = new URLSearchParams(location.search).get('category');

    return currentCategory === category ? 'active' : '';
  };

  return (
    <header className='header'>
      <div className='container header__container'>
        <Link to='/' className='header__logo-link'>
          <img src='/img/logo.svg' alt='Логотип Cup Time' className='header__logo' />
        </Link>
        <nav className='header__nav'>
          <ul className='header__menu'>
            {Object.entries(categories).map(([key, value]) =>
              <li key={key} className='header__menu-item'>
                <Link to={`/products?category=${key}`} className={`header__menu-link ${getActiveClass(key)}`}>{value}</Link>
              </li>
            )}
          </ul>
        </nav>

        <Link to='/cart' className='header__cart-link'>{totalQuantity}</Link>
      </div>
    </header>
  );
};
