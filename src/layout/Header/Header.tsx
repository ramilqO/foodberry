import './Header.scss';


const Header = () => {
    return(
        <div className='header'>
            <div className="header__container">

                <div className="logo header__logo">
                    <a href='/'>L O G O S</a>
                </div>

                <div className="header__input-block">
                    <form>
                        <input type='search' id='input-search header__input' placeholder='Введите адрес доставки' /><button type='submit'>icon</button>
                        </form>
                </div>

                <div className="contacts-block header__contacts-block">
                    <div className="header__call-btn"></div>
                    <div className="header__contacts-block-info">
                        <span>Контакты</span>
                        <a href='tel:+79175105759'>+7 (917) 510-57-59</a>
                    </div>
                </div>

                <button className="header__basket">
                    <span className="header__basket-text">Корзина</span>

                    <div className='header__basket-counter-block-background'>
                        <span className='header__basket-counter'>number</span>
                    </div>
                </button>

            </div>
        </div>
    );
}

export default Header;