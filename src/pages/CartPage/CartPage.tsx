import "./CartPage.scss";

import { Link } from "react-router-dom";

import Order from "../../components/CartPage/Order/Order";
import OfferCard from "../../components/CartPage/OfferCard/OfferCard";

const CartPage = () => {
	return (
		<div className="cart-page">
			<div className="cart-page__wrapper">
				<div className="orders-amount">
					<Link to="/" className="go-back">
						&lt; к выбору блюда
					</Link>
					<div className="orders-amount__wrapper">
						<div className="line"></div>
						<span className="orders-amount__path">Корзина</span>
						<span className="orders-counter">
							(в корзине n товаров)
						</span>
					</div>
				</div>

				<div className="orders">
					<div className="orders__wrapper">
						<Order />
						<Order />
					</div>
				</div>

				<div className="dish-offers">
					<span className="dish-offers__title">
						Добавить к заказу
					</span>

					<div className="dish-offers__wrapper">
						<OfferCard
							name="Пицца пеперонни с колбасой"
							about="lorem ipsum dolor sit amet consectutur"
							price={1240}
						/>
						<OfferCard
							name="Пицца пеперонни с колбасой"
							about="lorem ipsum dolor sit amet consectutur"
							price={1240}
						/>
						<OfferCard
							name="Пицца пеперонни с колбасой"
							about="lorem ipsum dolor sit amet consectutur"
							price={1240}
						/>
						<OfferCard
							name="Пицца пеперонни с колбасой"
							about="lorem ipsum dolor sit amet consectutur"
							price={1240}
						/>
					</div>
				</div>

				<hr className="dish-offers__divider" />

				<div className="place-order">
					<div className="place-order__wrapper">
						<div className="place-order__main-text">
							<p className="place-order__price-total">
								Итого:
								<span className="place-order__price">
									500 ₽
								</span>
							</p>
							<p className="place-order__subtitle">
								До бесплатной доставки не хватает: 10 ₽
							</p>
							<p className="place-order__subtitle-sm">
								Минимальная сумма заказа 1500 ₽
							</p>
						</div>

						<button className="place-order__place-btn">
							Оформить заказ
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default CartPage;
