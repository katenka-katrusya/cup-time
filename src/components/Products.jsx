import { Product } from './Product.jsx';
import { products } from '../products.js';

export const Products = () => {
  return (
    <section className='products'>
      <div className='container'>
        <h2 className='products__title'>Чай</h2>

        <ul className='products__list'>
          {products.map(product => <Product key={product.id} data={product} />)}
        </ul>
      </div>
    </section>
  );
};
