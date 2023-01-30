import "./Order.scss";

const Order = () => {
	return (
		<div className="order-block">
			<div className="order-block__wrapper">
				<div className="order-block__about-wrapper">
					<img
						className="order-block__image"
						src="https://sun1-15.userapi.com/s/v1/ig2/mllGY3O4A4jf6KVH-p17W4_jL7rDCwdLM6y2bEaKxTrlA4z_GWLBi9jpNiNPVHGcyp2UHfxTJOx5FjqMtUWgZuSa.jpg?size=200x200&quality=95&crop=584,0,1440,1440&ava=1"
						alt="something  wrong"
					/>

					<div className="main-text">
						<div className="main-text__title">
							ПИЦЦА ДВОЙНАЯ ПЕППЕРОНИ
						</div>
						<div className="main-text__subtitle">
							Кальмары, мидии, креветки, сыр маасдам, красный лук,
							микс оливок, базилик, соус песто
						</div>
					</div>
				</div>

				<div className="order-block__counter-block">
					<button className="order-block__btn">-</button>
					<span className="order-block__counter">1</span>
					<button className="order-block__btn">+</button>
				</div>

				<div className="order-block__price">1640 ₽</div>

				<button className="order-block__btn">╳</button>
			</div>
		</div>
	);
};

export default Order;
