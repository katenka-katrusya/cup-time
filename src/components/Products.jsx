import { Product } from './Product.jsx';

const products = [
  {
    id: 1,
    title: 'Кокосовая матча',
    image: '/img/photo-2.jpg',
    price: 390,
  },
  {
    id: 2,
    title: 'Зеленый индонезийский чай',
    image: '/img/photo-1.jpg',
    price: 340,
  },
  {
    id: 3,
    title: 'Черный чай из Эфиопии',
    image: '/img/photo.jpg',
    price: 380,
  },
  {
    id: 4,
    title: 'Черный чай из Калифорнии',
    image: '/img/photo-5.jpg',
    price: 360,
  },
  {
    id: 5,
    title: 'Органическая веганская матча',
    image: '/img/photo-4.jpg',
    price: 400,
  },
  {
    id: 6,
    title: 'Чай черный Лакандона',
    image: '/img/photo-3.jpg',
    price: 390,
  }
];

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
