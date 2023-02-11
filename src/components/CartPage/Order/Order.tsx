import "./Order.scss";

export interface IOrder {
	img: string;
	name: string;
	weight: string;
	about: string;
	price: number;
}

const Order = ({ img, name, weight, about, price }: IOrder) => {
	return (
		<div className="order-block">
			<div className="order-block__wrapper">
				<div className="order-block__about-wrapper">
					<img
						className="order-block__image"
						src="https://sun1-15.userapi.com/s/v1/ig2/mllGY3O4A4jf6KVH-p17W4_jL7rDCwdLM6y2bEaKxTrlA4z_GWLBi9jpNiNPVHGcyp2UHfxTJOx5FjqMtUWgZuSa.jpg?size=200x200&quality=95&crop=584,0,1440,1440&ava=1"
						alt="something  wrong"
					/>

					<div className="order-block__container-mobile">
						<div className="main-text">
							<div className="main-text__title">
								{name}
							</div>
							<div className="main-text__subtitle">
								{about}
							</div>
						</div>

						<div className="order-block__container-adaptive">
							<div className="order-block__counter-block">
								<button className="order-block__btn">-</button>
								<span className="order-block__counter">1</span>
								<button className="order-block__btn">+</button>
							</div>

							<div className="order-block__price">{price}</div>

							<button className="order-block__btn">╳</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Order;
