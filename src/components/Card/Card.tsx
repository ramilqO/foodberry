import "./Card.scss";

import { BuyIcon } from "../../icons/BuyIcon";
import skeleton from "./../../skeleton.png";
import { useState } from "react";

interface ICard {
	img: string;
	name: string;
	weight: string;
	about: string;
	price: number;
}

const Card = ({ img, name, weight, about, price }: ICard) => {
	const [buttonsShow, setButtonsShow] = useState(false);

	return (
		<div className="card">
			<div className="card__image-wrapper">
				<img
					src={img || skeleton}
					alt={name}
					className="card__image"
					onError={(
						event: React.SyntheticEvent<HTMLImageElement, Event>
					) => {
						event.currentTarget.src = skeleton;
					}}
				/>
			</div>
			<div className="card__main-text">
				<p className="card__card-name">{name}</p>
				<p className="card__card-about">{about}</p>
				{buttonsShow ? (
					<div className="card__price-container">
						<button className="card__cart-add-btn cart">-</button>
						<span className="card__card-price">{price} ₽</span>
						<span className="card__card-weight">{weight} г</span>
						<button className="card__cart-add-btn cart">+</button>
					</div>
				) : (
					<div className="card__price-container">
						<span className="card__card-price">{price} ₽</span>
						{weight && (
							<span className="card__card-weight">
								Вес: {weight} г
							</span>
						)}
						<button
							className="card__cart-button cart"
							onClick={() => setButtonsShow(true)}
						>
							В корзину <BuyIcon />
						</button>
					</div>
				)}
			</div>
		</div>
	);
};

export default Card;
