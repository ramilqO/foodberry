import "./OfferCard.scss";

const OfferCard = () => {
	return (
		<div className="offer-card">
			<div className="offer-card__wrapper">
				<div className="offer-card__image-block">
					<img
						src="https://i.pinimg.com/originals/7a/f2/51/7af251ac9560076fdc65b662452b5374.jpg"
						alt="img"
						className="offer-card__image"
						width="200px"
						height="100px"
					/>
				</div>
				<span className="offer-card__title">Квас ананасовый</span>

				<div className="offer-card__add-block">
					<span className="offer-card__subtitle">Добавить</span>
					<button className="offer-card__btn">+</button>
				</div>

                <div className="offer-card__price">1640 ₽</div>
			</div>
		</div>
	);
};

export default OfferCard;
