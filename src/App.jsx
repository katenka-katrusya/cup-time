function App() {
  return (
    <>
      <header className='header'>
        <div className='container header__container'>
          <a className='header__logo-link'>
            <img src='/img/logo.svg' alt='Логотип Cup Time' className='header__logo' />
          </a>

          <nav className='header__nav'>
            <ul className='header__menu'>
              <li className='header__menu-item'>
                <a href='#' className='header__menu-link'>Чай</a>
              </li>
              <li className='header__menu-item'>
                <a href='#' className='header__menu-link'>Кофе</a>
              </li>
              <li className='header__menu-item'>
                <a href='#' className='header__menu-link'>Чайники</a>
              </li>
              <li className='header__menu-item'>
                <a href='#' className='header__menu-link'>Турки</a>
              </li>
              <li className='header__menu-item'>
                <a href='#' className='header__menu-link'>Прочее</a>
              </li>
            </ul>
          </nav>

          <a href='cart.html' className='header__cart-link'>6</a>
        </div>
      </header>

      <main className='main'>
        <section className='promo'>
          <div className='container'>
            <div className='promo__container'>
              <h1 className='promo__title'>Попробуй новый вкус Арабики</h1>
              <a href='#' className='promo__link'>Перейти к кофе</a>
            </div>
          </div>
        </section>

        <section className='products'>
          <div className='container'>
            <h2 className='products__title'>Чай</h2>

            <ul className='products__list'>
              <li className='products__item'>
                <article className='product'>
                  <img src='/img/photo-2.jpg' alt='Кокосовая матча' className='product__image' />
                  <div className='product__content'>
                    <h3 className='product__title'>Кокосовая матча</h3>
                    <p className='product__price'>390 ₽</p>
                  </div>
                </article>
              </li>
              <li className='products__item'>
                <article className='product'>
                  <img src='/img/photo-1.jpg' alt='Зеленый индонезийский чай' className='product__image' />
                  <div className='product__content'>
                    <h3 className='product__title'>Зеленый индонезийский чай</h3>
                    <p className='product__price'>340 ₽</p>
                  </div>
                </article>
              </li>
              <li className='products__item'>
                <article className='product'>
                  <img src='/img/photo.jpg' alt='Черный чай из Эфиопии' className='product__image' />
                  <div className='product__content'>
                    <h3 className='product__title'>Черный чай из Эфиопии</h3>
                    <p className='product__price'>380 ₽</p>
                  </div>
                </article>
              </li>
              <li className='products__item'>
                <article className='product'>
                  <img src='/img/photo-5.jpg' alt='Черный чай из Калифорнии' className='product__image' />
                  <div className='product__content'>
                    <h3 className='product__title'>Черный чай из Калифорнии</h3>
                    <p className='product__price'>360 ₽</p>
                  </div>
                </article>
              </li>
              <li className='products__item'>
                <article className='product'>
                  <img src='/img/photo-4.jpg' alt='Органическая веганская матча' className='product__image' />
                  <div className='product__content'>
                    <h3 className='product__title'>Органическая веганская матча</h3>
                    <p className='product__price'>400 ₽</p>
                  </div>
                </article>
              </li>
              <li className='products__item'>
                <article className='product'>
                  <img src='/img/photo-3.jpg' alt='Чай черный Лакандона' className='product__image' />
                  <div className='product__content'>
                    <h3 className='product__title'>Чай черный Лакандона</h3>
                    <p className='product__price'>390 ₽</p>
                  </div>
                </article>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <footer className='footer'>
        <div className='container footer__container'>
          <a className='footer__logo-link'>
            <img src='/img/logo.svg' alt='Логотип Cup Time' className='footer__logo' />
          </a>

          <div className='footer__nav'>
            <ul className='footer__menu'>
              <li className='footer__menu-item'>
                <a href='#' className='footer__menu-link'>Чай</a>
              </li>
              <li className='footer__menu-item'>
                <a href='#' className='footer__menu-link'>Кофе</a>
              </li>
              <li className='footer__menu-item'>
                <a href='#' className='footer__menu-link'>Чайники</a>
              </li>
              <li className='footer__menu-item'>
                <a href='#' className='footer__menu-link'>Турки</a>
              </li>
              <li className='footer__menu-item'>
                <a href='#' className='footer__menu-link'>Прочее</a>
              </li>
            </ul>
          </div>

          <div className='footer__info'>
            <p className='footer__copyright'>&copy;CUPTIME, 2024</p>
            <ul className='footer__developers'>
              <li className='footer__developer'>Designer:
                <a href='#' className='footer__developer-link' target='_blank'>Anastasia Ilina</a>
              </li>
              <li className='footer__developer'>Developer:
                <a href='https://t.me/moon_sugar_moon' className='footer__developer-link' target='_blank'>Ekaterina
                  Suslova</a>
              </li>
            </ul>
          </div>

          <div className='footer__contacts'>
            <a href='mailto:CUPTIME@gmail.com' className='footer__email'>CUPTIME@gmail.com</a>
            <ul className='footer__social'>
              <li className='footer__social-item'>
                <a href='#' className='footer__social-link'>
                  <svg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M16 3C8.824 3 3 8.824 3 16C3 23.176 8.824 29 16 29C23.176 29 29 23.176 29 16C29 8.824 23.176 3 16 3ZM22.032 11.84C21.837 13.894 20.992 18.886 20.563 21.187C20.381 22.162 20.017 22.487 19.679 22.526C18.925 22.591 18.353 22.032 17.625 21.551C16.481 20.797 15.831 20.329 14.726 19.601C13.439 18.756 14.271 18.288 15.012 17.534C15.207 17.339 18.535 14.31 18.6 14.037C18.609 13.9957 18.6078 13.9527 18.5965 13.9119C18.5852 13.8712 18.5641 13.8338 18.535 13.803C18.457 13.738 18.353 13.764 18.262 13.777C18.145 13.803 16.325 15.012 12.776 17.404C12.256 17.755 11.788 17.937 11.372 17.924C10.904 17.911 10.02 17.664 9.357 17.443C8.538 17.183 7.901 17.04 7.953 16.585C7.979 16.351 8.304 16.117 8.915 15.87C12.711 14.219 15.233 13.127 16.494 12.607C20.108 11.099 20.849 10.839 21.343 10.839C21.447 10.839 21.694 10.865 21.85 10.995C21.98 11.099 22.019 11.242 22.032 11.346C22.019 11.424 22.045 11.658 22.032 11.84Z'
                      fill='white' />
                  </svg>
                </a>
              </li>
              <li className='footer__social-item'>
                <a href='#' className='footer__social-link'>
                  <svg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
                    <path
                      d='M13.3337 20.0001L20.2537 16.0001L13.3337 12.0001V20.0001ZM28.747 9.56008C28.9203 10.1867 29.0403 11.0267 29.1203 12.0934C29.2137 13.1601 29.2537 14.0801 29.2537 14.8801L29.3337 16.0001C29.3337 18.9201 29.1203 21.0667 28.747 22.4401C28.4137 23.6401 27.6403 24.4134 26.4403 24.7467C25.8137 24.9201 24.667 25.0401 22.907 25.1201C21.1737 25.2134 19.587 25.2534 18.1203 25.2534L16.0003 25.3334C10.4137 25.3334 6.93366 25.1201 5.56033 24.7467C4.36033 24.4134 3.58699 23.6401 3.25366 22.4401C3.08033 21.8134 2.96033 20.9734 2.88033 19.9067C2.78699 18.8401 2.74699 17.9201 2.74699 17.1201L2.66699 16.0001C2.66699 13.0801 2.88033 10.9334 3.25366 9.56008C3.58699 8.36008 4.36033 7.58675 5.56033 7.25341C6.18699 7.08008 7.33366 6.96008 9.09366 6.88008C10.827 6.78675 12.4137 6.74675 13.8803 6.74675L16.0003 6.66675C21.587 6.66675 25.067 6.88008 26.4403 7.25341C27.6403 7.58675 28.4137 8.36008 28.747 9.56008Z'
                      fill='white' />
                  </svg>
                </a>
              </li>
              <li className='footer__social-item'><a href='#' className='footer__social-link'>
                <svg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M16 3C8.82021 3 3 8.82021 3 16C3 23.1798 8.82021 29 16 29C23.1798 29 29 23.1798 29 16C29 8.82021 23.1798 3 16 3ZM20.9996 17.667C20.9996 17.667 22.1493 18.8018 22.4323 19.3285C22.4404 19.3394 22.4445 19.3502 22.4472 19.3556C22.5623 19.5493 22.5894 19.6996 22.5325 19.812C22.4377 19.9989 22.1127 20.0909 22.0017 20.0991H19.9704C19.8296 20.0991 19.5344 20.0625 19.1769 19.816C18.902 19.6238 18.6311 19.3082 18.3671 19.0008C17.973 18.5431 17.6318 18.1477 17.2878 18.1477C17.2441 18.1476 17.2007 18.1545 17.1592 18.168C16.8992 18.252 16.566 18.623 16.566 19.6116C16.566 19.9203 16.3223 20.0977 16.1503 20.0977H15.22C14.9031 20.0977 13.2524 19.9867 11.7899 18.4443C9.99969 16.5552 8.38823 12.7662 8.37469 12.731C8.27312 12.4859 8.48302 12.3546 8.71187 12.3546H10.7634C11.037 12.3546 11.1264 12.5211 11.1886 12.6687C11.2618 12.8407 11.5299 13.5246 11.97 14.2937C12.6836 15.5477 13.121 16.0569 13.4718 16.0569C13.5375 16.0561 13.6021 16.0394 13.66 16.0081C14.1177 15.7535 14.0324 14.1218 14.0121 13.7832C14.0121 13.7196 14.0107 13.0533 13.7765 12.7337C13.6085 12.5022 13.3228 12.4142 13.1495 12.3817C13.2196 12.2849 13.3121 12.2064 13.419 12.1528C13.7331 11.9957 14.2992 11.9727 14.8611 11.9727H15.174C15.7833 11.9808 15.9404 12.0201 16.1611 12.0756C16.608 12.1826 16.6175 12.471 16.5782 13.4582C16.566 13.7385 16.5539 14.0554 16.5539 14.4292C16.5539 14.5104 16.5498 14.5971 16.5498 14.6892C16.5363 15.1916 16.52 15.7617 16.8748 15.9959C16.9211 16.025 16.9745 16.0404 17.0292 16.0406C17.1524 16.0406 17.5234 16.0406 18.5282 14.3168C18.8381 13.7619 19.1074 13.1853 19.334 12.5916C19.3543 12.5564 19.4139 12.448 19.4843 12.406C19.5362 12.3795 19.5939 12.3661 19.6522 12.3668H22.064C22.3267 12.3668 22.5068 12.406 22.5406 12.5076C22.6002 12.6687 22.5298 13.1603 21.4289 14.6512L20.9373 15.2999C19.9393 16.608 19.9393 16.6744 20.9996 17.667Z'
                    fill='white' />
                </svg>
              </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
