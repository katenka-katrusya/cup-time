import { Product } from './Product.jsx';
import { useEffect } from 'react';
import { useProducts } from '../context/ProductContext.jsx';
import { useSearchParams } from 'react-router-dom';
import { SkeletonLoader } from './SkeletonLoader.jsx';

export const Products = () => {
  const [searchParams] = useSearchParams();
  const { products, setCategory, categories } = useProducts();
  const category = searchParams.get('category');

  useEffect(() => {
    setCategory(category);
  }, [category, setCategory]);

  const categoryTitle = categories[category] || 'Товары';

  return (
    <section className='products'>
      <div className='container'>
        <h2 className='products__title'>{categoryTitle}</h2>

        <ul className='products__list'>
          {products.length
           ? products.map(product => <Product key={product.id} data={product} />)
           : <SkeletonLoader />
          }
        </ul>
      </div>
    </section>
  );
};
