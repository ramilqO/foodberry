import "./Header.scss";

import { LocationIcon } from "../../icons/LocationIcon";
import { CallingIcon } from "../../icons/CallingIcon";
import { SearchIcon } from "../../icons/SearchIcon";

const Header = () => {
  return (
    <div className="header">
      <div className="header__container">

        <div className="header__logo">
          <a href="/" className="logo">
            L O G O S
          </a>
        </div>

        <div className="input-block header__input-block">
          <form className="input-block__form">
            <div className="input-block__decoration-image header__decoration-image">
              <LocationIcon />
            </div>

            <input
              type="search"
              className="input-search header__input"
              placeholder="Введите адрес доставки"
            />

            <button
              type="submit"
              className='search-image header__search-image"'
            >
              <SearchIcon />
            </button>
          </form>
        </div>

        <div className="contacts-block header__contacts-block">
          <div className="contacts-block__call-img">
            <CallingIcon />
          </div>
          <div className="contacts-block__info header__contacts-block-info">
            <span className="contacts-block__info-item">Контакты:</span>
            <br />
            <a
              href="tel:+79175105759"
              className="contacts-block__info-item_bold"
            >
              +7 (917) 510-57-59
            </a>
          </div>
        </div>

        <button className="cart header__cart">
          <span className="cart__text header__cart-text">Корзина</span>
          <div className="cart__divider"></div>
          <div className="cart__counter-block header__cart-counter-block">
            <span className="cart__counter header__cart-counter">4</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Header;
