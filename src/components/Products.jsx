import { Product } from './Product.jsx';
import { useEffect } from 'react';
import { useProducts } from '../context/ProductContext.jsx';
import { useSearchParams } from 'react-router-dom';

export const Products = () => {
  const [searchParams] = useSearchParams();
  const { products, setCategory } = useProducts();
  const category = searchParams.get('category');

  useEffect(() => {
    setCategory(category);
  }, [category, setCategory]);

  return (
    <section className='products'>
      <div className='container'>
        <h2 className='products__title'>{category}</h2>

        <ul className='products__list'>
          {products.map(product => <Product key={product.id} data={product} />)}
        </ul>
      </div>
    </section>
  );
};
