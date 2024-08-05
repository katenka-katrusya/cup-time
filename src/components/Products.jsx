import { Product } from './Product.jsx';
import { useEffect } from 'react';
import { useProducts } from '../context/ProductContext.jsx';
import { useSearchParams } from 'react-router-dom';
import { SkeletonLoader } from './SkeletonLoader.jsx';

export const Products = () => {
  const [searchParams] = useSearchParams();
  const { products, setCategory } = useProducts();
  const category = searchParams.get('category');

  const title = (category) => {
    switch (category) {
      case 'tea':
        return 'Чай';
      case 'coffee':
        return 'Кофе';
      case 'teapots':
        return 'Чайники';
      case 'cezves':
        return 'Турки';
      case 'other':
        return 'Прочее';
      default:
        return 'Чай';
    }
  }

  useEffect(() => {
    setCategory(category);
  }, [category, setCategory]);

  return (
    <section className='products'>
      <div className='container'>
        <h2 className='products__title'>{title(category)}</h2>

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
