import './Card.scss';

import { BuyIcon } from '../../icons/BuyIcon';


// interface ICard {
//     img: string;
//     name: string,
//     weight: string;
//     about: string;
//     price: number;
// }

const Card = () => {
    return(
        <div className="card">
            <div className="card__image-wrapper">
                <img src="https://healthjade.net/wp-content/uploads/2021/07/healthy-foods-for-diabetics.jpg" alt="" className='card__image'/>
            </div>
            <div className="card__main-text">
                <div className="card__title-container">
                    <span className='card__card-name'>Ягненок</span>
                    <span className="card__card-weight">Вес: 250 г</span>
                </div>

                <p className="card__card-about">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>

                <div className="card__price-container">
                    <span className="card__card-price">620 ₽</span>
                    <button className="card__cart-button cart">В корзину <BuyIcon /></button>
                </div>
            </div>
        </div>
    );
}

export default Card;